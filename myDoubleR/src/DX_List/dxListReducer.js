import { ListTabViewSelectedStatus } from './dxListActions'

const clickForChange = (state, action) => {
	if (!state) 
	return ListTabViewSelectedStatus

    switch (action.type) {
      case 'CHANGE_SELECTEDSTATUS':
        return backStatusWithNum(action.selectedNum)
      default:
        return state
    }
}

function backStatusWithNum(num){
  var flag1 = false;
  var flag2 = false;
  var flag3 = false;
  if (num === 1) {
      flag1 = true;
      flag2 = false;
      flag3 = false;
  }else if (num === 2) {
      flag1 = false;
      flag2 = true;
      flag3 = false;
  }else if (num === 3) {
      flag1 = false;
      flag2 = false;
      flag3 = true;
  }

  return {
    isSelectedOne: flag1,
    isSelectedTwo: flag2,
    isSelectedThree: flag3
  };
}
export default clickForChange