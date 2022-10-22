import React from 'react'
import './AppWrapper.css';
import MainPage from './mainPage/mainPage'

function AppWrapper() {
  return (
    <div className="AppWrapper">
      <header className="main-header">
        <MainPage />
      </header>
    </div>
  );
}

export default AppWrapper;
