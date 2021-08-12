const window = require('global');
const exactMath = require('exact-math');
// import erc20Abi from '../contracts/erc20.abi';

import { formatNumberDownRoundWithExtractMax } from './utils';

import { extension, TRON_HOST } from '../constant/value';
import { MODE } from '_config';

class TronWebHelper {
  private address: string;
  private tronWeb: any;
  private isWrongNetwork: boolean;
  //   private extensionName: string;
  private static instance: TronWebHelper;

  constructor() {
    this.isWrongNetwork = false;
    // this.extensionName = ex;
    this.address = '';
    this.tronWeb = null;
  }

  public static getInstance(): TronWebHelper {
    if (!TronWebHelper.instance) {
      TronWebHelper.instance = new TronWebHelper();
    }

    return TronWebHelper.instance;
  }

  public getTronWeb() {
    if (this.tronWeb) {
      TronWebHelper.getInstance();
    }
    return this.tronWeb;
  }

  /**
   *
   * @param extensionName : extension name
   * @returns void
   */
  public connect(extensionName: string): boolean {
    if (extensionName === extension.tronLink) {
      if (window.tronWeb) {
        if (window.tronWeb.fullNode.host === TRON_HOST.tronLocalhost) {
          this.tronWeb = null;
          this.isWrongNetwork = true;
          return false;
        }

        this.tronWeb = window.tronWeb;
        // this.extensionName = extensionName

        const isWrongNetwork =
          MODE === 'TESTNET'
            ? window.tronWeb.fullNode.host !== TRON_HOST.tronTestnet
            : window.tronWeb.fullNode.host !== TRON_HOST.tronMainnet;

        if (isWrongNetwork) {
          this.isWrongNetwork = true;
          return true;
        }
        this.address = window.tronWeb.defaultAddress.base58;
      } else throw new Error('Detect Wallet failed!');
    } else {
      this.isWrongNetwork = false;
      return false;
    }
    return false;
  }

  /**
   * Get balance of account connecting
   * @returns balance of account (number)
   */
  public async getBalance(): Promise<number> {
    try {
      const balance = await this.tronWeb.trx.getBalance(this.address);
      return formatNumberDownRoundWithExtractMax(Number(balance), 6);
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  /**
   * Check app is connected tron web
   * @returns true/false
   */
  public isConnected() {
    return this.tronWeb !== null;
  }

  /**
   * check network connected
   * @returns  true/false
   */
  public checkWrongNetwork() {
    return this.isWrongNetwork;
  }

  //get current chain of extension
  public getCurrentChainId() {
    return Number(window.ethereum.networkVersion);
  }

  /**
   * Get current address
   * @returns address
   */
  getCurrentAddress() {
    return this.address;
  }

  /**
   * Get balance of token (smart contract ERC20)
   * @param tokenAddress  : smart contract address
   * @param decimal : decimal number
   * @returns
   */
  async getTokenBalance(tokenAddress: string, decimal: number) {
    try {
      let contract = await this.tronWeb.contract().at(tokenAddress);
      const tokenBalance = await contract.balanceOf(this.address).call();
      return exactMath.div(Number(tokenBalance), exactMath.pow(10, decimal));
    } catch (error) {
      console.log(error);
    }

    return 0;
  }

}

export const tronWebHelper = TronWebHelper.getInstance();
