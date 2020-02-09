import { DELETE_DATA } from "./types";

export const deleteData = data => {
  return {
    type: DELETE_DATA,
    payload: data
  };
};
