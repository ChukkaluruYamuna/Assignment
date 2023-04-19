import { ActionConstants } from "./actionConstants";

export const uploadFiles = (file) => {
  return {
    type: ActionConstants.UPLOAD_FILE,
    payload: file,
  };
};
