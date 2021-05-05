import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

useEffect(() => {
  firebase.auth().onAuthStateChanged((authed) => {
    if (authed) {
      const userInfoObj = {
        fullName: authed.displayName,
        profileImage: authed.photoURL,
        uid: authed.uid,
        user: authed.email.split('@')[0],
      };
      setUser(userInfoObj);
    } else if (user || user === null) {
      setUser(false);
    }
  });
}, []);

function App() {
  return (
    <>
      <Router>
        <NavBar user={user} />
        <Routes user={user} players={players} setPlayers={setPlayers} />
      </Router>
    </>
  );
}

export default App;
