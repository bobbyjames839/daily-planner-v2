import './css/App.css';
import {Planner} from './pages/Planner';
import {Time} from './pages/Time';
import {Tasks} from './pages/Tasks';
import {Reminders} from './pages/Reminders';

function App() {
  return (
    <div className="App">
      <div className='left'>
        <Planner />
      </div>
      <div className='right'>
        <Time/>
        <Tasks/>
        <Reminders/>
      </div>
    </div>
  );
}

export default App;
