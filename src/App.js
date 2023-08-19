/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Home from './home';
import { Route, Routes } from 'react-router';
import Read from './pages/ReadMore/[id]';
import HomeNew from './pages/home';

function App() {
  return (
    <div className="">
      <header >
    <Routes>
      <Route path="/" element={<HomeNew />}/>
      <Route path="*" element={<Read />}/>
    </Routes>
      </header>
    </div>
  );
}

export default App;
