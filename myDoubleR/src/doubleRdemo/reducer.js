// import { combineReducers } from 'redux'
// import { changeContent, CHANGE_COLOR, changeContentWithColor } from './actions'

const toDoForChange = (state, action) => {
	if (!state) 
	return {
		themeColor: '',
		pageContent: 'content'
	}

    switch (action.type) {
      case 'CHANGE_COLOR':
        return { state, themeColor: action.themeColor}
      case 'CHANGE_CONTENT':
        return { state, pageContent: action.pageContent }
      case 'CHANGE_CONTENT_COLOR':
        return { state, themeColor: action.themeColor ,pageContent: action.pageContent }
      default:
        return state
    }
}
export default toDoForChange