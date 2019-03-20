export const TOGGLE_POWER = 'TOGGLE_POWER';
export const TOGGLE_BANK = 'TOGGLE_BANK';
export const UPDATE_DISPLAY = 'UPDATE_DISPLAY'

export const togglePower = () => {
  return {
    type: TOGGLE_POWER
  };
};

export const toggleBank = () => {
  return {
    type: TOGGLE_BANK
  };
};

export const updateDisplay = text => {
  return {
    type: UPDATE_DISPLAY,
    text
  }
};
