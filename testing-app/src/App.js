import React, {useState} from 'react';
import Dashboard from './componenets/Dashboard';
import Display from './componenets/Display';
import './App.css';

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [pitch, setPitch] = useState({
    ball: 0,
    strike: 0,
    foul: 0,
    innings: 1,
    outs: 0
  })
  return (
    <div className="App">
      <h1>Play Ball!!!</h1>
      <section className='scoreboard'>
        <div className='topRow'>
          <div className='home'>
            <h2 className='home__name'>NYY</h2>
          </div>
          <div className='home__score'>{homeScore}</div>
          <div className='away'>
            <h2 className='away__name'>NYM</h2>
            <div className='away__score'>{awayScore}</div>
          </div>
      </div>
      <section>
        <Display value={pitch} />
      </section>
      <section className='buttons'>
      <section>
        <Dashboard setPitch={setPitch} value={pitch} />
      </section>
      </section>
      </section>
      
    </div>
  );
}

export default App;
