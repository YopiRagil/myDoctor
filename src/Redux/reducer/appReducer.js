/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

const initialState = {
  isLoading: true,
  doctor: null,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_DOCTOR':
      return {
        ...state,
        isLoading: false,
        doctor: action.payload,
      };
    default:
      return state;
  }
}
