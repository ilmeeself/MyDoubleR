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
        return (
        	<div id = "listShowView">
	        	<ListShowMainCard />
	        	<ListShowCommonCard />
        	</div>
        );
    }
}


/*
  ListShowView内部卡片--mainCard
*/
class ListShowMainCard extends Component{
    render() {
        return (
        	<div id = "listShowMainCard">i am mainCard</div>
        )
    }
}


/*
  ListShowView内部卡片--commonCard
*/
class ListShowCommonCard extends Component{
    render() {
        return (
        	<div id = "listShowCommonCard">i am commonCard</div>
        )
    }
}