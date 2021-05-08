import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer, editPlayer } from '../helpers/data/PlayerData';

const PlayerForm = ({
  formTitle,
  setPlayers,
  firebaseKey,
  imageUrl,
  name,
  position,
  user
}) => {
  const [player, setPlayer] = useState({
    imageUrl: imageUrl || '',
    name: name || '',
    position: position || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid
  });

  const handleInputChange = (e) => {
    setPlayers((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      editPlayer(player).then((playersArray) =>
      setPlayers(playersArray));
    } else {
      addPlayer(player).then((playersArray) => {
        setPlayers(playersArray);
      });
    }
  };

  return (
    <div>
  )
}
