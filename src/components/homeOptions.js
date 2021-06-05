import '../stylesheets/homeOptions.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import React, { useEffect } from 'react';

function HomeOptionsView(props) {
  useEffect(() => {
  }, [props.teams, props.randomizeSeeds]);
  
  function onSliderChange(e) {
    const changeTeamSizeBy = Math.abs(props.teams.length - e);
    if(props.teams.length < e){
      let tmpArr = [...props.teams];
      const arrayToAppend = new Array(changeTeamSizeBy).join('.').split('.');
      tmpArr = tmpArr.concat(arrayToAppend);
      props.setTeams(tmpArr);
    } else{
      const tmpArr = [...props.teams];
      tmpArr.splice(props.teams.length - changeTeamSizeBy, changeTeamSizeBy);
      props.setTeams(tmpArr);
    }
  }

  function generateTournamentBracket(){
    console.log("Should generate tournament bracket!");
  }

  function setTeamName(event, index){
    const tmpArr = [...props.teams];
    tmpArr[index] = event.target.value;
    props.setTeams(tmpArr);
  }

  function toggleRandomizeSeedsCheckbox(e){
    props.setRandomizeSeeds(e.target.checked);
  }

  return (
    <div className="options">
        <form className="option-container">
        <label className="option-title" >
            Tournament name:
            <input type="text" name="name" className="home-input-field" id="tournament-name-input" autocomplete="off"/>
        </label>
        </form>

        <label className="option-title">
            Number of teams:
        </label>
        <div id="slider-container" className="option-container">
          <Slider min={2} max={50} defaultValue={4} step={2} dots={true} onChange={(e) => onSliderChange(e)}/>
        </div>
        <div className="option-container" id="number-of-teams-container">
          <h6 id="number-of-teams-indicator">{props.teams.length}</h6>
        </div>
        <div className="option-container" id="checkbox-container">
          <h6 id="checkbox-text">Randomize seeds</h6>
          <Checkbox defaultChecked={1} onChange={(e) => toggleRandomizeSeedsCheckbox(e)}/>
        </div>
        {props.teams.map((team, index) => {
          if(index % 2 === 0){
            return <div className="team-row" key={index}>
                    <label className="team-text" >
                      Team {index}:
                      <input type="text" name="name" autocomplete="off" className="home-input-field" value={props.teams[index] !== undefined ? props.teams[index] : ''} onChange={(e) => setTeamName(e, index)}/>
                    </label>
                    {!props.randomizeSeeds ? <h4 className="team-row-versus-text">vs.</h4> : ''}
                    <label className="team-text" >
                      Team {index + 1}:
                      <input type="text" name="name" autocomplete="off" className="home-input-field" value={props.teams[index + 1] !== undefined ? props.teams[index + 1] : ''} onChange={(e) => setTeamName(e, index+1)}/>
                    </label>
                  </div>
          } else {
            return ''
          }
        })}
        <h6 id="informatory-text-empty-fields">If no team name is given it will receive a random name*</h6>
        <div className="options-container">
          <button id="generate-bracket-button" onClick={() => generateTournamentBracket()}>Generate bracket</button>
        </div>
    </div>
  );
}

export default HomeOptionsView;
