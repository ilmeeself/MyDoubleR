import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {

  render () {
    return (
      <h1 style={{ color: this.props.themeColor}}>this is header</h1>
    )
  }
}

// 把当前的store state 映射到展示组件中
const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
  }
}
Header = connect(mapStateToProps)(Header)

export default Header