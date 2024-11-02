import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Easy"} target={1}/>
        <TimerChallenge title={"Medium"} target={5}/>
        <TimerChallenge title={"Hard"} target={15}/>
        <TimerChallenge title={"Pro"} target={30}/>
      </div>
    </>
  );
}

export default App;
