import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom';

function Home() {

  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const jumpHandler = () => {
    navigate("/login")
  }

  return (
    <div className="App">
     <div>{t('index.demo')}</div>
    <button onClick={jumpHandler}>跳转</button>
    </div>
  );
}

export default Home;