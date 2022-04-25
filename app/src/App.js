import logo from './logo.svg';
import './App.css';
import DailyPage from './DailyPage';
import TodaysGoals from './TodaysGoals';
import AddGoal from './AddGoal';
import CompletedGoals from './CompletedGoals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DailyPage />
        
      </header>
      <div>
        <AddGoal />
        <TodaysGoals />
      </div>
      <div>
        <CompletedGoals />
      </div>
    </div>
  );
}

export default App;
