import { Contract } from '@ethersproject/contracts'

import { useMemo } from 'react'

import ERC20_ABI from '../constant/abi/erc20.abi.json'
import DEPOSIT_MAT_ABI from '../constant/abi/DepositMAT.json'

import { getContract } from '../utils'
import { useActiveWeb3React } from './index'

 
// returns null on errors
function useContract(address: string | undefined, ABI: any, withSignerIfPossible = true): Contract | null {
  const { library, account } = useActiveWeb3React()

  return useMemo(() => {
    if (!address || !ABI || !library) return null
    try {
      return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
    } catch (error) {
      console.error('Failed to get contract', error)
      return null
    }
  }, [address, ABI, library, withSignerIfPossible, account])
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}


export function useBuyMatContract(matAddress?: string, withSignerIfPossible?: boolean): Contract | null {
  return useContract(matAddress, DEPOSIT_MAT_ABI, withSignerIfPossible)
}

