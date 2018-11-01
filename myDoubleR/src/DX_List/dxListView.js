import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react'
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import "./dxListViews.less";

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
    render() {
        return (
        	<div id = "listTabView">i am ListTabView</div>
        );
    }
}


// 展示部分
class ListShowView extends Component{
    render() {
        var arr = callBackDataCount()
        var list = []
        for(var i = 0;i < arr.length;i++){
            var item = arr[i]
            if (item === 'i am mainCard') {
                list.push(<ListShowMainCard decs={item}/>)
            }else if (item === 'i am commonCard'){
                list.push(<ListShowCommonCard decs={item}/>)
            } 
        }
        return (
        	<div id = "listShowView">
	        	{list}
        	</div>
        );
    }
}

function callBackDataCount(){
    return ['i am mainCard', 'i am commonCard', 'i am commonCard', 'i am commonCard', 'i am commonCard', 'i am commonCard'];
}

/*
  ListShowView内部卡片--mainCard
*/
class ListShowMainCard extends Component{
    constructor (props) {
        super(props)
    }
    render() {
        return (
        	<div id = "listShowMainCard">{this.props.decs}</div>
        )
    }
}


/*
  ListShowView内部卡片--commonCard
*/
class ListShowCommonCard extends Component{
    constructor (props) {
        super(props)
    }    
    render() {
        return (
        	<div id = "listShowCommonCard">{this.props.decs}</div>
        )
    }
}