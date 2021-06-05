import '../stylesheets/homePage.css';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';
import HomeOptions from '../components/homeOptions.js';

function HomePage() {

  const [teams, setTeams] = useState(['','', '', '']);
  const [randomizeSeeds, setRandomizeSeeds] = useState(true);   

  return (
    <div className="App">
      <h6 id="page-title">Tournament bracket generator</h6>
        <HomeOptions
          teams={teams}
          setTeams={setTeams}
          randomizeSeeds={randomizeSeeds}
          setRandomizeSeeds={setRandomizeSeeds}
        />
    </div>
  );
}

export default HomePage;


