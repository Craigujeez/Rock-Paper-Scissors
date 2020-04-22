import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './App';
// import Step3 from './Steps/Step3';
import Step2 from './Steps/Step2';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route exact path='/step2' component={Step2}/>
            {/* <Route exact path='/step3' component={Step3}/> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
