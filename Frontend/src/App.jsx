import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ToBeRead from './pages/ToBeRead';
import ShowBook from './pages/ShowTBRBook';
import Home from './pages/Home';
import Reads from './pages/Reads';  
import CurrentReads from './pages/CurrentReads';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='tbr' element= {<ToBeRead />}/>
      <Route path='books/details/:id' element= {<ShowBook />}/>
      <Route path="read" element={<Reads />} />
      <Route path="cr" element={<CurrentReads />} />
    </Routes>
  );
};

export default App