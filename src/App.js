import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import UserInfo from './components/UserInfo/UserInfo';
import UserContainer from './components/UserContainer/UserContainer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UserContainer></UserContainer>
    </div>
  );
}

export default App;
