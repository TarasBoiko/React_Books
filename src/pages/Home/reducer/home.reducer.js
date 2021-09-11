import { HOME_ACTION_TYPES } from '../action-types/home.action-types';

const initialState = {
  modalProps: { isOpen: false },
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case HOME_ACTION_TYPES.SHOW_MODAL:
      return {
        ...state,
        modalProps: { isOpen: true },
      };

    case HOME_ACTION_TYPES.HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}
