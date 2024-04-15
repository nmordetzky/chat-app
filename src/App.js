import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { Chat } from './components/chat';
import { useState, useRef } from 'react';
import { signOut} from 'firebase/auth';
import { auth } from './firebase-config';
import Cookies from "universal-cookie";
const cookie = new Cookies(); 

function App() {
  const [isAuth, setIsAuth] = useState(cookie.get("auth-token"));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);
  const signUserOut = async () => {
    await signOut(auth);
    cookie.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  };

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
        <div className="footer"></div>
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
        <div> 
          {room ? 
              ( 
                <Chat room={room}/> 
              ) 
            : 
              (
                <div> 
                  <label>Type in a chat room name</label>
                  <input ref={roomInputRef} className="input"/>
                  <button onClick={() => setRoom(roomInputRef.current.value)}>
                    Join Chat
                  </button>
                </div>
              )
          }
          <div className='sign-out'>
            <button onClick={signUserOut}>
              Sign Out
            </button>
          </div>
          <div className="footer"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
