/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style

const initialState = {
  isLoading: true,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
