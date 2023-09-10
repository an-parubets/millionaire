export function getFormattedAmount(amount: number, currency: string): string {
  return new Intl.NumberFormat([], {
    style: 'currency',
    currencyDisplay: 'narrowSymbol',
    currency,
  }).format(Number(amount));
}

export const convertIndexToAlpha = (index: number): string => {
  // ASCII value of first character
  const A = 'A'.charCodeAt(0);

  const numberToCharacter = (num: number): string => String.fromCharCode(A + num);

  return numberToCharacter(index);
};

export const delay = (timeout: number): Promise<void> => new Promise((resolve) => {
  setTimeout(resolve, timeout);
});
