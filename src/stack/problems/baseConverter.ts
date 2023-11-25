import { Stack } from "../stack";

export const baseConverter = (decimal: number, base: number) => {
  const remStack = new Stack<number>();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rem: number;
  let number = decimal;
  let binaryString = "";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()!];
  }

  return binaryString;
};
