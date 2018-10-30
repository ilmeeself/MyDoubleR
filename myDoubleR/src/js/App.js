import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { render } from 'react-dom';
import BtnOne from './btnOne';
import BtnTwo from './btnTwo';

// 定义一个组件
class App extends React.Component {
    render() {
        return (
            <div id="RootPage">
               <div>
                  <BtnOne />
                  <BtnTwo />
               </div> 
            </div>
        );
    }
}

export default App

// {this.state.isShowBtnOne &&
//  <BtnOne isShow = {this.state.isShowBtnOne}
//          onChangeStateBtnOne = {this.onChangeStateBtnOne.bind(this)}
//          onChangeStateBtnTwo = {this.onChangeStateBtnTwo.bind(this)}/>}
// {this.state.isShowBtnTwo &&
//  <BtnTwo isShow = {this.state.isShowBtnTwo}
//          onChangeStateBtnOne = {this.onChangeStateBtnOne.bind(this)}
//          onChangeStateBtnTwo = {this.onChangeStateBtnTwo.bind(this)}/>}
