import React from 'react';
import './App.css';
import { observer } from 'mobx-react-lite';

function App() {
  return (
    <div className="App">
      <h1>EV PowerTank</h1>
      <p>Первый сервис мобильных зарядных станций в Москве</p>
    </div>
  );
}

export default observer(App);
