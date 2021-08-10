export const setDocterDetail = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_DOCTOR',
      payload: data,
    });
  };
};

export const makeAppointMent = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'SET_APPOINTMENT',
      payload: data,
    });
  };
};

export const cancelAppointMent = (data) => {
  return async (dispatch) => {
    dispatch({
      type: 'CANCEL_APPOINTMENT',
      payload: data,
    });
  };
};
