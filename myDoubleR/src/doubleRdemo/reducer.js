// import { combineReducers } from 'redux'
import { pageContentWithColor } from './actions'

const toDoForChange = (state, action) => {
	if (!state) 
	return pageContentWithColor

    switch (action.type) {
      case 'CHANGE_COLOR':
      //使用 Object.assign() 新建了一个副本
        return Object.assign({}, state, {
          themeColor: action.themeColor
         })
      case 'CHANGE_CONTENT':
        return Object.assign({}, state, {
          pageContent: action.pageContent
         })
      case 'CHANGE_CONTENT_COLOR':
        return { state, themeColor: action.themeColor ,pageContent: action.pageContent }
      default:
        return state
    }
}
export default toDoForChange