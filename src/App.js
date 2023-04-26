import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter  , Routes , Route } from 'react-router-dom';
import Detali from './components/Detali';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Routes>
            <Route exact path='/login' element={<Login/>}/>
            <Route  path="/detail" element={<Detali/> }/>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </>
    </div>
  );
}

export default App;
