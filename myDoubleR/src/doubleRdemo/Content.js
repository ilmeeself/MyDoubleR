import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Content extends Component {
  
  render () {
    var content = this.props.pageContent
    return (
      <div>
        <p style={{ color: this.props.themeColor }}>{ content }</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor,
    pageContent: state.pageContent
  }
}
Content = connect(mapStateToProps)(Content)

export default Content