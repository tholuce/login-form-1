import React from 'react';
import Switcher from './components/switcher/Switcher';
import styles from './App.module.scss';
import Input from './components/input/Input';
import Button from './components/button/Button';


function App() {
  return <div className={styles.login}>
      <div className={styles.panel}>
        <p className={styles.header}>Login Form</p>
        <Switcher />
        <Input />
        <Input />
        <a className={styles.forgot} href='#'>Forgot Password?</a>
        <Button />
        <p className={styles.member}>Not a member? <span><a className={styles.link} href='#'>Sign up now</a></span></p>
      </div>
    </div>;
}

export default App;
