import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { btn_one_clicked} from './redux_test/clickBtnActions'

//
class BtnOne extends Component {
	
    changeBtnStatus(flag){
      if (this.props.onClickBtnOne) {
        this.props.onClickBtnOne(flag)
      }
    }

    render() { 	
	    return (
	      <div>
	       { this.props.isBtnOneClicked && <div id="btn_one" onClick={this.changeBtnStatus.bind(this, !this.props.isBtnOneClicked)}> </div> }
	      </div>
	    )
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
    onClickBtnOne: (flag) => {
      dispatch(btn_one_clicked(flag))
    }
  }
}

BtnOne = connect(mapStateToProps, mapDispatchToProps)(BtnOne)
export default BtnOne