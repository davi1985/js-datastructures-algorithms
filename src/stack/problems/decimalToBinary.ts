import { Stack } from "../stack";

export const decimalToBinary = (decimal: number) => {
  const remStack = new Stack<number>();
  let number = decimal;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop();
  }

  return binaryString.toString();
};
