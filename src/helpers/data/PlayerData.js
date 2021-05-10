import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json?orderBy="user"&equalTo="${user}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (obj, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/players.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers(uid).then((playersArray) => resolve(playersArray));
        });
    }).catch((error) => reject(error));
});

const deletePlayer = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/players/${firebaseKey}.json`)
    .then(() => getPlayers(uid).then((playersArray) => resolve(playersArray)))
    .catch((error) => reject(error));
});

const editPlayer = (player, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbURL}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers(uid).then(resolve))
    .catch((error) => reject(error));
});

export {
  getPlayers,
  addPlayer,
  deletePlayer,
  editPlayer
};
