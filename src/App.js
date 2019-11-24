import React from 'react';
import './css/App.css';
import { Provider } from 'react-redux';

import Header from './component/header.js';
import HomeFormSection from './component/login.js';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <HomeFormSection />
      </div>
    </Provider>
  );
}

export default App;
