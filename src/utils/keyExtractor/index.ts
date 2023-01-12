const keyExtractor = (item: any) => {
  return item?.id.toString();
};

export default keyExtractor;
