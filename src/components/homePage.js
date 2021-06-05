import '../stylesheets/homePage.css';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import HomeOptions from '../components/homeOptions.js';

function HomePage() {

  const [numberOfTeams, setNumberOfTeams] = useState(2);   

  return (
    <div className="App">
      <h6 id="page-title">Tournament bracket generator</h6>
      <HomeOptions/>
    </div>
  );
}

export default HomePage;


