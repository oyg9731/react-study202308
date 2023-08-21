import React, { useState } from 'react'
import MainHeader from './components/SidEffect/MainHeader/MainHeader'
import Home from './components/SidEffect/Home/Home'
import Login from './components/SidEffect/Login/Login'


const App = () => {


  return (
    <>
      <MainHeader />
      <main>
        {/* <Home /> */}
        <Login />
      </main>
    </>
  )
}

export default App