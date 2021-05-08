import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/players.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers().then((playersArray) =>
          resolve(playersArray));
        });
    }).catch((error) => reject(error));
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/players/${firebaseKey}.json`)
  .then(() => getPlayers().then((playersArray) => resolve(playersArray)))
  .catch((error) => reject(error));
});

const editPlayer = (player) => new Promise((response, reject) => {
  axios.patch(`${dbURL}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers().then(resolve))
    .catch((error) => reject(error));
});

export {
  getPlayers,
  addPlayer,
  deletePlayer,
  editPlayer
};
