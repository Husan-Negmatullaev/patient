export default (input: any, number: number) => {
  return input.length > number ? `${input.substring(0, number)}...` : input;
};
