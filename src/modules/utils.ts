

const exactMath = require("exact-math");
export const formatNumberDownRoundWithExtractMax = (number : number, decimal: number) => {

  return exactMath
    .div(
      exactMath.floor(exactMath.mul(number, exactMath.pow(10, decimal))),
      exactMath.pow(10, decimal)
    )
    .toFixed(decimal);
};

export const validateAmountInput = (num: string)=>{

  const rexInput =  new RegExp(/^[0-9]+\.[0-9]{8,}$/)
  // num = Number(num)
  return rexInput.test(num)
  // return check;
}