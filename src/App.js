import React from 'react';
import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';

import {useSelector} from 'react-redux';

function App() {

  const isAuth = useSelector(state => state.auth.isAuthenticated);
  console.log(isAuth)

  return (
    <React.Fragment>
      <Header />
      {!isAuth && <LoginForm />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
