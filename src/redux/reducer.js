import * as actions from './actions';

import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_BANK:
      return {
        ...state,
        isPowerOn: !state.isPowerOn
      };

    case actions.TOGGLE_POWER:
      return {
        ...state,
        activeBank: ++state.activeBank % 2
      };

    case actions.UPDATE_DISPLAY:
      return {
        ...state,
        display: action.text
      }

    default:
      return state;
  }
};
