import React from 'react';
import {applyMiddleware, compose, createStore} from 'redux'
import allReducers from './Reducers/allReducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css';
import App from './components/App';
import PlanetDetail from './components/PlanetDetails/PlanetDetail'
import ShowFilms from './components/Films/ShowFilms'
import ShowResidents from './components/Residents/ShowResidents'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const middleware = [thunk];
  const store = createStore(
    allReducers,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/planet/:id" component={PlanetDetail} />
          <Route path="/films" component={ShowFilms} />
          <Route path="/residents" component={ShowResidents} />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
