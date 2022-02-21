import React from 'react';
import { authActions } from '../../store/auth';
import { useDispatch } from 'react-redux';

import styles from './LoginForm.module.css';

const LoginForm = () => {

  const dispatch = useDispatch();

  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <form onSubmit={formSubmitHandler} className={styles['login-form']}>
        <div className={styles['form-group']}>
            <label>Username</label>
            <input type="text" />
        </div>
        <div className={styles['form-group']}>
            <label>Password</label>
            <input type="password" />
        </div>
        <div className={styles['form-group']}>
            <button type='submit'>Login</button>
        </div>

    </form>
  )
}

export default LoginForm