import { pageBtnOgState } from './clickBtnActions'

const btnReducer = (state, action) => {
	if (!state) 
	return pageBtnOgState

  switch (action.type) {
    case 'CLICK_BTN_ONE':
      return { state, isBtnOneClicked: action.isBtnOneClicked ,isBtnTwoClicked: !action.isBtnOneClicked }
    case 'CLICK_BTN_TWO':
      return { state, isBtnOneClicked: !action.isBtnTwoClicked ,isBtnTwoClicked: action.isBtnTwoClicked }
    default:
      return state
  }
}
export default btnReducer