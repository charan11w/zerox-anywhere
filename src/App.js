import './App.css';
import './styles/Header.css'
import Header from './components/header/Header';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import Movies from './components/MoviesList/MoviesList';
import Sell from './components/Sell/Sell';
import Buy from './components/Buy/Buy';
import Support from './components/Support/Support';
import Sub from './components/Home/Sub/Sub';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
function App() {

  const [isAuthenticated,SetIsSuthenticated] =useState(false);

  function setAuthentication(){
    setAuthentication(true)
  }
  return (
    <BrowserRouter>
      {isAuthenticated && <Header />}

      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='signup' element={<SignUp />} />
        <Route path='category' element={<Category />} />
        <Route path='home' element={<Home />} >
          <Route path='sub' element={<Sub />} />
        </Route>
        <Route path='activity' element={<Movies />} />
        <Route path='sell' element={<Sell />} />
        <Route path='buy' element={<Buy />}></Route>
        <Route path='support' element={<Support />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
