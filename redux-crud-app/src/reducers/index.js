import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store';
import App from './App';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/items" component={ItemList} />
        <Route path="/add-item" component={ItemForm} />
        <Route path="/edit-item/:id" component={ItemForm} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
