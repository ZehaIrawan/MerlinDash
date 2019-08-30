import React from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  );
}

export default App;
