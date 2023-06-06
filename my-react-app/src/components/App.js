import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';

const App = () => {

  return (
    <div>
        <Navigation/>
        <BreweryContainer />
    </div>
  )
}

export default App