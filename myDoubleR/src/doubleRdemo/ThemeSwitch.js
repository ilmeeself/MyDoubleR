import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeColor, changeContent, changeContentWithColor} from './actions'

class ThemeSwitch extends Component {

  handleSwitch (obj) {
    if (this.props.onSwitchColorBtn) {
      this.props.onSwitchColorBtn(obj)
    }
  }

  render () {
    return (
      <div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitch.bind(this, {content:'this red'})}>Red</button>
          <div>
          </div>
        <button
          style={{ color: this.props.themeColor }}
          onClick={this.handleSwitch.bind(this, {content:'this blue'})}>Blue</button>
      </div>
    )
  }
}

// 一个指定如何把当前的store的state映射到展示组件的props中的 函数
// 返回一个对象
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

// 一个定义如何分发action的 函数 -- 接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
// 返回一个函数
const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchColorBtn: (obj) => {
      dispatch(changeContent(obj.content)) //dispatch(action) 方法更新 state；{ type: 'CHANGE_COLOR', themeColor: color }是一个action，可以独立起来写到一个action.js文件当中
    }
  }
}

// connect函数接收以上两个函数作为参数，生成容器组件，容器组件可以从 Redux state 树中读取部分数据
// 下面语句的意思是，调用connect函数，传入指定的state（由mapStateToProps生生成），传入指定的分发action的函数（mapDispatchToProps）
ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch

// <button
        //   style={{ color: this.props.themeColor }}
        //   onClick={this.handleSwitch.bind(this, {color:'red',content:'this red'})}>Red</button>
        // <button
        //   style={{ color: this.props.themeColor }}
        //   onClick={this.handleSwitch.bind(this, {color:'blue',content:'this blue'})}>Blue</button>