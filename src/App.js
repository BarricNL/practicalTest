import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Body from './components/body/Body';
import {Provider} from 'react-redux';
import store from './store/Store'

function App() {
  return (
    <Provider store = {store}>
    <div>
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
