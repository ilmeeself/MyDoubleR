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
import btnReducer from './js/redux_test/clickBtnReducer'
import todoApp from './indexReducer';
import ListRootView from './DX_List/dxListView';


class Root extends React.Component {
    render() {
        return (
          <div>
            <ListRootView />
          </div>
        );
    }
}

// class Root extends React.Component {
//     render() {
//         return (
//           <div>
//             <RootA />
//             <RootB />
//           </div>
//         );
//     }
// }

// const store1 = createStore(toDoForChange)

// class RootA extends React.Component {
//     render() {
//         return (
//           <Provider store={store1}>
//               <AppDouble />
//           </Provider> 
//         );
//     }
// }

// const store2 = createStore(btnReducer)

// class RootB extends React.Component {
//     render() {
//         return (
//           <Provider store={store2}>
//               <App />
//           </Provider> 
//         );
//     }
// }

// 进行渲染
render(<Root/>, document.getElementById('app'));
