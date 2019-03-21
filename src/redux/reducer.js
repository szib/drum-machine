import * as actions from './actions';

import initialState from './initialState';

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_POWER:
      return {
        ...state,
        isPowerOn: !state.isPowerOn,
        display: ''
      };

    case actions.TOGGLE_BANK:
      return {
        ...state,
        activeBank: state.activeBank === 1 ? 0 : 1
      };

    case actions.UPDATE_DISPLAY:
      return {
        ...state,
        display: action.text
      };

    default:
      return state;
  }
};
