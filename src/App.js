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
import SignUp from './components/Login/SignUp';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createContext, useState } from 'react';

export const dataCreation = createContext(null);
function App() {

  const [add, setAdd] = useState(0);
  const [isAuthenticated,SetAuthenticated] =useState(JSON.parse(sessionStorage.getItem('isauthenticated')) || false);

  function setAuth(){
    SetAuthenticated(true)
    sessionStorage.setItem('isauthenticated',true)
  }
  return (
    <dataCreation.Provider value={{ add, setAdd }}>

    <BrowserRouter>
      {isAuthenticated && <Header />}

      <Routes>
        <Route path='/' element={<Login  setAuth={setAuth}/>}/>
        <Route path='signup' element={<SignUp />} />
        <Route path='category' element={<Category />} />
        <Route path='home' element={<Home />} >
          <Route path='sub' element={<Sub />} />
        </Route>
        <Route path='activity' element={<Movies />} />
        <Route path='sell' element={<Sell />} />
        <Route path='buy' element={<Buy />}></Route>
        <Route path='cart' element={<Cart />} />
        <Route path='support' element={<Support />}></Route>
      </Routes>
    </BrowserRouter>
    </dataCreation.Provider>
  );
}

export default App;
