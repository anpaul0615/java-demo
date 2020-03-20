import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Meassge from './pages/Message';
import NotFound from './pages/NotFound';

import MessageStore from './stores/message';

const stores = {
  messageStore: new MessageStore(),
};

document.body.insertAdjacentHTML('beforeend', '<div id="root"></div>');

render(
  <Provider {...stores}>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/www/" component={Home} />
        <Route path="/www/home" component={Home} />
        <Route path="/www/about" component={About} />
        <Route path="/www/message" component={Meassge} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();
