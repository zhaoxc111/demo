import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next'
import Routes from './router/index'

function App() {

  const { t, i18n } = useTranslation()

  const languageChange = (e: any) => {
    console.log(e.target.value)
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="App">
     <select defaultValue={i18n.language} onChange={languageChange}>
      <option key='zh-CN' value='zh-CN' label="中文" />
      <option key='ja-JP' value='ja-JP' label="日语" />
     </select>
     <Routes />
    </div>
  );
}

export default App;