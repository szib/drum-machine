export const TOGGLE_POWER = 'TOGGLE_POWER';
export const TOGGLE_BANK = 'TOGGLE_BANK';
export const HIT_DRUMPAD = 'HIT_DRUM_PAD';

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

export const hitDrumpad = keyCode => {
  return {
    type: HIT_DRUMPAD,
    keyCode
  };
};
