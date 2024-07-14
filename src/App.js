import './App.css';
import { SecondsCounter } from './components/SecondsCounter';

function App(props) {
  return (
    <div className="App">      
      <SecondsCounter seconds={props.seconds}/>
    </div>
  );
}

export default App;
