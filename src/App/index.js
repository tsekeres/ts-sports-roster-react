import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/PlayerData';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        getPlayers(authed.uid).then((playersArray) => setPlayers(playersArray));
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar user={user} />
      <Routes
        user={user}
        players={players}
        setPlayers={setPlayers}
     />
    </>
  );
}

export default App;
