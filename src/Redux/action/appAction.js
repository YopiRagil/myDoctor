export const setDocterDetail = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_DOCTOR',
      payload: data,
    });
  };
};
