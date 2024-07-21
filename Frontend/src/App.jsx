import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ToBeRead from './pages/ToBeRead';
import Home from './pages/Home';
import Reads from './pages/Reads';  
import CurrentReads from './pages/CurrentReads';
import ShowReadBook from './pages/showReadBook';
import ShowTBRBook from './pages/ShowTBRBook';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='tbr' element= {<ToBeRead />}/>
      <Route path='books/read/:id' element= {<ShowReadBook />}/>
      <Route path='books/tbr/:id' element= {<ShowTBRBook />}/>
      <Route path="read" element={<Reads />} />
      <Route path="cr" element={<CurrentReads />} />
    </Routes>
  );
};

export default App