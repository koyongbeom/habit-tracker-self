import logo from "./logo.svg";
import "./App.css";
import Habits from "./components/habits";
import { faRunning } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div>
      <div class="header">
        <i class="fas fa-leaf fa-2x"></i>
        <span class="header-text">Habit Tracker</span>
        <span class="header-count">0</span>
      </div>
      <Habits></Habits>
    </div>
  );
}

export default App;
