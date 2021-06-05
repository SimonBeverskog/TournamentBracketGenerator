import '../stylesheets/homePage.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useState } from 'react';

function HomeOptionsView() {

  const [numberOfTeams, setNumberOfTeams] = useState(2);   

  return (
    <div className="options">
        <form className="option-container">
        <label className="option-title" >
            Tournament name:
            <input type="text" name="name" className="home-input-field"/>
        </label>
        </form>

        <label className="option-title">
            Number of teams:
        </label>
        <div id="slider-container" className="option-container">
        <Slider min={2} max={100} defaultValue={4}/>
    </div>
    </div>
  );
}

export default HomeOptionsView;
