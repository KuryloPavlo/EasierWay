import React from 'react';
import { Login } from './src/view';
import { AppNavigation } from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/config/store';


const App = () => (
  <Provider
    store = { store }
  >
    <AppNavigation/>
  </Provider>
  
)

export default App;