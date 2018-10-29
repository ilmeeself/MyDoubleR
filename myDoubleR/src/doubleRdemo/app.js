import React, { Component } from 'react'
import 'babel-polyfill';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
import ThemeSwitch from './ThemeSwitch'

class Appp extends Component {

  render () {
    return (
      <div>
        <Header />
        <Content />
        <ThemeSwitch />
      </div>
    )
  }
}
export default Appp