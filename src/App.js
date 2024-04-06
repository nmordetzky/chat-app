import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Nathaniel's React based Chat App.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Auth />
      </header>
    </div>
  );
}

export default App;
