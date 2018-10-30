export const CHANGE_CONTENT = 'CHANGE_CONTENT';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CHANGE_CONTENT_COLOR = 'CHANGE_CONTENT_COLOR'

export const pageContentWithColor = {
  	themeColor: '',
	pageContent: 'content'
}

export function changeContent(content) {
  return { type: CHANGE_CONTENT, pageContent: content }
}

export function changeColor(color) {
  return { type: CHANGE_COLOR, themeColor: color }
}

export function changeContentWithColor(color, content) {
  return { type: CHANGE_CONTENT_COLOR, themeColor: color, pageContent: content }
}