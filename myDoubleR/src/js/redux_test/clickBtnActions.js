export const CLICK_BTN_ONE = 'CLICK_BTN_ONE';
export const CLICK_BTN_TWO = 'CLICK_BTN_TWO';

export const pageBtnOgState= {
  	isBtnOneClicked: true,
	isBtnTwoClicked: false
};

export function btn_one_clicked(flag) {
  return { type: CLICK_BTN_ONE, isBtnOneClicked: flag }
}

export function btn_two_clicked(flag) {
  return { type: CLICK_BTN_TWO, isBtnTwoClicked: flag}
}