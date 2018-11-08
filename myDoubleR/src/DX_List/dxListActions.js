export const CHANGE_SELECTEDSTATUS = 'CHANGE_SELECTEDSTATUS';

export const ListTabViewSelectedStatus = {
  	isSelectedOne: true,
	isSelectedTwo: false,
	isSelectedThree: false
}

export function changeSelectedStatus(selectedNum) {
  return { type: CHANGE_SELECTEDSTATUS, selectedNum: selectedNum}
}