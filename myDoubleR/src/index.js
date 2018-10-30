import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import "./less/page.less";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './js/App';
import Appp from './doubleRdemo/app';
import toDoForChange from './doubleRdemo/reducer';

const store = createStore(toDoForChange)

class Roott extends React.Component {
    render() {
        return (
          <Provider store={store}>
              <Appp />
          </Provider> 
        );
    }
}

// 定义一个组件
class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowBtnOne: true,
            isShowBtnTwo: false,
        };
    }

    onChangeStateBtnOne(stateBtnOne){
        this.setState({isShowBtnOne: stateBtnOne});
    }

    onChangeStateBtnTwo(stateBtnTwo){
        this.setState({isShowBtnTwo: stateBtnTwo});
    }

    render() {
        return (
            <div id="RootPage">
               <div>
                 {this.state.isShowBtnOne &&
                  <BtnOne isShow = {this.state.isShowBtnOne}
                          onChangeStateBtnOne = {this.onChangeStateBtnOne.bind(this)}
                          onChangeStateBtnTwo = {this.onChangeStateBtnTwo.bind(this)}/>}

                 {this.state.isShowBtnTwo &&
                  <BtnTwo isShow = {this.state.isShowBtnTwo}
                          onChangeStateBtnOne = {this.onChangeStateBtnOne.bind(this)}
                          onChangeStateBtnTwo = {this.onChangeStateBtnTwo.bind(this)}/>}
               </div> 
            </div>
        );
    }
}

class BtnOne extends React.Component {

    changeBtnStatus(){
      if (this.props.isShow) {
        this.props.onChangeStateBtnOne(!this.props.isShow)
        this.props.onChangeStateBtnTwo(this.props.isShow)
      }else {
        this.props.onChangeStateBtnOne(this.props.isShow)
        this.props.onChangeStateBtnTwo(!this.props.isShow)
      }
    }

    render() {
        return (
            <div id="btn_one" onClick={this.changeBtnStatus.bind(this)}>

            </div>
        );
    }
}

class BtnTwo extends React.Component {

    changeBtnStatus(){
      if (this.props.isShow) {
        this.props.onChangeStateBtnTwo(!this.props.isShow)
        this.props.onChangeStateBtnOne(this.props.isShow)
      }else {
        this.props.onChangeStateBtnTwo(this.props.isShow)
        this.props.onChangeStateBtnOne(!this.props.isShow)
      }
    }

    render() {
        return (
            <div id="btn_two" onClick={this.changeBtnStatus.bind(this)}> 
                
            </div>
        );
    }
}

// 进行渲染
render(<Roott/>, document.getElementById('app'));

//定义一个渲染方法
// const renderDomWay = Component => {
//     render(
//         <Component />,
//         document.getElementById('app')
//     );
// };
// renderDomWay(Root);