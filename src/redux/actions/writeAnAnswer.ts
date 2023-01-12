import { EnumWriteAnAnswer } from "redux/actionTypes";
import createActions from "redux/createActions";
import { store } from "redux/reducer";

export const writeAnswer = (text: string) => {
  const _writeAnswer = createActions(EnumWriteAnAnswer.WRITE_ANSWER, {
    answer: text,
  });
  store.dispatch(_writeAnswer);
};

export const addPrescription = (prescription) => {
  const _addPrescription = createActions(EnumWriteAnAnswer.ADD_PRESCRIPTION, {
    prescription: prescription,
  });
  store.dispatch(_addPrescription);
};

export const deletePrescription = () => {
  const _deletePrescription = createActions(
    EnumWriteAnAnswer.DELETE_PRESCRIPTION,
    {}
  );
  store.dispatch(_deletePrescription);
};

export const addAttachedFiles = (file) => {
  const _addAttachedFiles = createActions(
    EnumWriteAnAnswer.ADD_ATTACHED_FILES,
    {
      file: file,
    }
  );
  store.dispatch(_addAttachedFiles);
};

export const deleteAttachedFiles = () => {
  const _deleteAttachedFiles = createActions(
    EnumWriteAnAnswer.DELETE_ATTACHED_FILES,
    {}
  );
  store.dispatch(_deleteAttachedFiles);
};

export const addShareInfo = (doctorInfo) => {
  const _addShareInfo = createActions(EnumWriteAnAnswer.ADD_SHARE_INFO, {
    shareInfo: doctorInfo,
  });
  store.dispatch(_addShareInfo);
};

export const deleteShareInfo = () => {
  const _deleteShareInfo = createActions(
    EnumWriteAnAnswer.DELETE_SHARE_INFO,
    {}
  );
  store.dispatch(_deleteShareInfo);
};
