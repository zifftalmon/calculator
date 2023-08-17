import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons.tsx';
import Line from './components/Line.tsx';
import Actions from './components/Actions.tsx';

function App() {
  return (
    <div className="App">
      <Line/>
      <Buttons/>
      <Actions/>
    </div>
  );
}

export default App;
