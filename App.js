global.Intl = require('intl');

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import frLocale from 'react-intl/locale-data/fr';

import RootLayout from './src/RootLayout';
import reducers from './src/reducers';


addLocaleData([...frLocale]);



export default class App extends React.Component {

  render() {
    const createStoreWithMiddleware = applyMiddleware()(createStore);

    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <IntlProvider>
          <RootLayout />
        </IntlProvider>
      </Provider>
    );
  }
}
