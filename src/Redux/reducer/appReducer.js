/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

const initialState = {
  isLoading: true,
  doctor: null,
  appointment: [],
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
    case 'SET_APPOINTMENT':
      return {
        ...state,
        isLoading: false,
        appointment: [...state.appointment, action.payload],
      };
    case 'CANCEL_APPOINTMENT':
      return {
        ...state,
        isLoading: false,
        appointment: state.appointment.filter((el) => el !== action.payload),
      };
    default:
      return state;
  }
}
