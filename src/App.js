import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { Chat } from './components/chat';
import { useState, useRef } from 'react';
import Cookies from "universal-cookie";
const cookie = new Cookies(); 

function App() {
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the React Chat App
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <Auth setIsAuth={setIsAuth}/>
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
                <Chat room={room}/> 
              ) : (
                <div> 
                  <label>Enter a Chat Room Name</label>
                  <input ref={roomInputRef} className="input"/>
                  <button onClick={() => setRoom(roomInputRef.current.value)}>
                    Join Chat
                  </button>
                </div>
              )}
        </div>
      </header>
    </div>
  );
}

export default App;
