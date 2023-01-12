export const formatNumber = (amount: number) => {
  return new Intl.NumberFormat().format(amount);
};
