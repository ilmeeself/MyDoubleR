import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { btn_two_clicked} from './redux_test/clickBtnActions'

//
class BtnTwo extends React.Component {

    changeBtnStatus(flag){
      if (this.props.onClickBtnTwo) {
        this.props.onClickBtnTwo(flag)
      }
    }

    render() {
        return (
          <div>
            { this.props.isBtnTwoClicked && <div id="btn_two" onClick={this.changeBtnStatus.bind(this, !this.props.isBtnTwoClicked)}> </div> }
          </div>          
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isBtnOneClicked: state.isBtnOneClicked,
    isBtnTwoClicked: state.isBtnTwoClicked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickBtnTwo: (flag) => {
      dispatch(btn_two_clicked(flag))
    }
  }
}
BtnTwo = connect(mapStateToProps, mapDispatchToProps)(BtnTwo)
export default BtnTwo