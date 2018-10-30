import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.css';
import "./less/page.less";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AppDouble from './doubleRdemo/app';
import toDoForChange from './doubleRdemo/reducer';
import App from './js/App';
import btnReducer from './js/redux_test/clickBtnReducer';

// const store = createStore(toDoForChange)

// class Root extends React.Component {
//     render() {
//         return (
//           <Provider store={store}>
//               <AppDouble />
//           </Provider> 
//         );
//     }
// }

const store = createStore(btnReducer)

class Root extends React.Component {
    render() {
        return (
          <Provider store={store}>
              <App />
          </Provider> 
        );
    }
}

// 进行渲染
render(<Root/>, document.getElementById('app'));
