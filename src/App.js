import React, { useContext, useEffect, useState } from 'react';
import MainHeader from './components/SidEffect/MainHeader/MainHeader';
import Home from './components/SidEffect/Home/Home';
import Login from './components/SidEffect/Login/Login';
import AuthContext from './store/auth-context';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login />}
      </main>
    </>
  );
};

export default App;
