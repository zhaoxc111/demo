import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { useTranslation } from 'react-i18next'

function Login() {

  const { t, i18n } = useTranslation()

  return (
    <div>
     login
     <div>{t('login.text')}</div>
    </div>
  );
}

export default Login;