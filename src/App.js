import './App.css';
import './styles/Header.css'
import Header from './components/header/Header';
import Category from './components/Category/Category';
import Home from './components/Home/Home';
import Activity from './components/Activity/Activity';
import Sell from './components/Sell/Sell';
import Buy from './components/Buy/Buy';
import Support from './components/Support/Support';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='home' />} />
        <Route path='category' element={<Category />} />
        <Route path='home' element={<Home />} />
        <Route path='activity' element={<Activity />} />
        <Route path='sell' element={<Sell />} />
        <Route path='buy' element={<Buy />}></Route>
        <Route path='support' element={<Support />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
