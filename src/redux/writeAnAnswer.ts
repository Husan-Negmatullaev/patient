import { EnumWriteAnAnswer } from "./actionTypes";

const initValue = {
  answer: "",
  prescription: {},
  attachedFiles: {},
  shareInfo: {},
};

const writeAnAnswer = (state = initValue, action: any) => {
  switch (action.type) {
    case EnumWriteAnAnswer.WRITE_ANSWER:
      return {
        ...state,
        answer: action.answer,
      };
    case EnumWriteAnAnswer.ADD_PRESCRIPTION:
      return {
        ...state,
        prescription: action.prescription,
      };
    case EnumWriteAnAnswer.DELETE_PRESCRIPTION:
      return {
        ...state,
        prescription: {},
      };
    case EnumWriteAnAnswer.ADD_ATTACHED_FILES:
      return {
        ...state,
        attachedFiles: action.attachedFiles,
      };
    case EnumWriteAnAnswer.DELETE_ATTACHED_FILES:
      return {
        ...state,
        attachedFiles: {},
      };
    case EnumWriteAnAnswer.ADD_SHARE_INFO:
      return {
        ...state,
        shareInfo: action.shareInfo,
      };
    case EnumWriteAnAnswer.DELETE_SHARE_INFO:
      return {
        ...state,
        shareInfo: {},
      };
    default:
      return state;
  }
};

export default writeAnAnswer;
