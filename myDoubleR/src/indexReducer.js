import { combineReducers } from 'redux'
import { pageBtnOgState } from './js/redux_test/clickBtnActions'
import btnReducer from './js/redux_test/clickBtnReducer'
import { pageContentWithColor } from './doubleRdemo/actions'
import toDoForChange from './doubleRdemo/reducer'


const todoApp = combineReducers({
  btnReducer,
  toDoForChange
})

export default todoApp