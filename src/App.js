import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { useState } from 'react';
import Cookies from "universal-cookie";
const cookie = new Cookies(); 

function App() {
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));
  const [room, setRoom] = useState(null);
  if (!isAuth) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the React Chat App
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <Auth />
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the React Chat App
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <div> {room ? (
                <div>Chat</div> 
              ) : (
                <div> 
                  <label>Enter a Chat Room Name</label>
                  <input class="room-name"/>
                  <button>Join Chat</button>
                </div>
              )}
        </div>
      </header>
    </div>
  );
}

export default App;
