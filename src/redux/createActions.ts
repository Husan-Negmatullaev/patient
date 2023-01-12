//ACTIONS
const createActions = (type: string, data: any) => ({
  type,
  ...data,
});
export default createActions;
