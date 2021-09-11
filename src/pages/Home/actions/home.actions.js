import { HOME_ACTION_TYPES } from '../action-types/home.action-types';

export const openModalAction = (params) => ({
  type: HOME_ACTION_TYPES.SHOW_MODAL,
  payload: { params },
});

export const closeModalAction = () => ({
  type: HOME_ACTION_TYPES.HIDE_MODAL,
});
