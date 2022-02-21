import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import styles from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  }

  return (
    <header>
        <a href='#'>KossCounter</a>
        {isAuth && <ul className={styles['nav-links']}>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Contact</a></li>
            <li onClick={logoutHandler}><button>Logout</button></li>
        </ul>}
    </header>
  )
}

export default Header