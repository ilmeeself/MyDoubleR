import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import "./dxListViews.less";
import { changeSelectedStatus} from './dxListActions'

class ListRootView extends Component{
    render() {
        return (
        	<div id = "listRootView">
        		<ListTabView />
        		<ListShowView />
        	</div>
        );
    }
}
export default ListRootView


// 分栏
class ListTabView extends Component{

    changeListTabViewStatus(num){
      if (this.props.onClickBtnWithNum) {
        this.props.onClickBtnWithNum(num)
      }
    }

    render() {
        return (
        	<div id = "listTabView">
                { this.props.isSelectedOne && <p id = "listTabView_Section_Selected" onClick={this.changeListTabViewStatus.bind(this, 1)}>one</p> }
                { !this.props.isSelectedOne && <p id = "listTabView_Section_NotSelected" onClick={this.changeListTabViewStatus.bind(this, 1)}>one</p> }

                { this.props.isSelectedTwo && <p id = "listTabView_Section_Selected" onClick={this.changeListTabViewStatus.bind(this, 2)}>two</p> }
                { !this.props.isSelectedTwo && <p id = "listTabView_Section_NotSelected" onClick={this.changeListTabViewStatus.bind(this, 2)}>two</p> }

                { this.props.isSelectedThree && <p id = "listTabView_Section_Selected" onClick={this.changeListTabViewStatus.bind(this, 3)}>three</p> }
                { !this.props.isSelectedThree && <p id = "listTabView_Section_NotSelected" onClick={this.changeListTabViewStatus.bind(this, 3)}>three</p> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    isSelectedOne: state.isSelectedOne,
    isSelectedTwo: state.isSelectedTwo,
    isSelectedThree: state.isSelectedThree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickBtnWithNum: (num) => {
      dispatch(changeSelectedStatus(num))
    }
  }
}

ListTabView = connect(mapStateToProps, mapDispatchToProps)(ListTabView)


// 展示部分
class ListShowView extends Component{
    render() {
        var arr = callBackDataCount()
        var list = []
        for(var i = 0;i < arr.length;i++){
            var item = arr[i]
            if (item === 'i am mainCard') {
                list.push(<ListShowMainCard decs={'i am mainCard && i am mainCard && i am mainCard && i am mainCard && i am mainCard && i am mainCard && i am mainCard'}/>)
            }else if (item === 'i am commonCard'){
                list.push(<ListShowCommonCard decs={item}/>)
            } 
        }
        return (
            <div>
                { this.props.isSelectedOne && <div id = "listShowViewOne">{list}</div> }
                { this.props.isSelectedTwo && <div id = "listShowViewTwo">two</div> }
                { this.props.isSelectedThree && <div id = "listShowViewThree">three</div> }
            </div>
            
        );
    }
}
ListShowView = connect(mapStateToProps, mapDispatchToProps)(ListShowView)


function callBackDataCount(){
    return ['i am mainCard', 'i am commonCard', 'i am commonCard', 'i am commonCard', 'i am commonCard', 'i am commonCard'];
}

/*
  ListShowView--One内部卡片--mainCard
*/
class ListShowMainCard extends Component{
    constructor (props) {
        super(props)
    }
    render() {
        return (
        	<div id = "listShowMainCard">
                <div id = "listShowMainCard_Pic"></div>
                <p id = "listShowMainCard_Title">{this.props.decs}</p>
            </div>
        )
    }
}


/*
  ListShowView--One内部卡片--commonCard
*/
class ListShowCommonCard extends Component{
    constructor (props) {
        super(props)
    }    
    render() {
        return (
        	<div id = "listShowCommonCard">
                <div id = "listShowCommonCard_Pic"></div>
                <p id = "listShowCommonCard_Title">{this.props.decs}</p>
            </div>
        )
    }
}