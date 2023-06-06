import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navbar from './Navbar';
import BreweryContainer from './BreweryContainer';
import Search from './Search';

const App = () => {

  return (
    <div>
        <Navbar />
        <BreweryContainer />
        <Search />
    </div>
  )
}

export default App