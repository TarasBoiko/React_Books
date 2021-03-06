import { lockScroll } from '../../lib/lib_module/scrollLock.js';

export const types = {
  INSERT_MODAL: 'INSERT_MODAL',
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  REMOVE_MODAL: 'REMOVE_MODAL',
};

const initialState = {
  modalType: null,
  modalProps: { isOpen: false },
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        modalType: action.modalType,
        modalProps: { isOpen: true },
      };

    case types.HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}

export const actions = {
  openModal: (modalParams) => {
    lockScroll();
    return {
      type: types.SHOW_MODAL,
      ...modalParams,
    };
  },
  closeModal: () => {
    return {
      type: types.HIDE_MODAL,
    };
  },
};
