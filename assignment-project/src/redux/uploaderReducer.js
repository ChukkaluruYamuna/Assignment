import { ActionConstants } from "./actionConstants";

const initialState = {
  files: [],
};

export const uploaderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionConstants.UPLOAD_FILE:
      return { ...state, files: [...state.files, payload] };
    default:
      return state;
  }
};
