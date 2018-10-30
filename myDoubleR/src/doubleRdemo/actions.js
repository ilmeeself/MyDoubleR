export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_CONTENT_COLOR = 'CHANGE_CONTENT_COLOR'

export const pageContentWithColor = {
  	themeColor: '',
	pageContent: 'content_text'
}

export function changeContent(content) {
  return { type: CHANGE_CONTENT,themeColor: pageContentWithColor.themeColor, pageContent: content }
}

export function changeColor(color) {
  return { type: CHANGE_COLOR, themeColor: color ,pageContent: pageContentWithColor.pageContent}
  
}

export function changeContentWithColor(color, content) {
  return { type: CHANGE_CONTENT_COLOR, themeColor: color, pageContent: content }
}