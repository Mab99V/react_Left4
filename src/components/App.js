import React from 'react';
import CreateInf from './CreateInf';
import Header from './pages/Header';
import List from './List';
import Navbar from './navegacion/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landingpage';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navbar/>
        
        <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/conocelos" element={<List/>} />
          <Route path="/create" element={<CreateInf/>} />
          <Route path="/infected" element={<Header/>} />
         </Routes>
        </div>
      </div>
    </div>
 </div>

     
     
  );
};

export default App;