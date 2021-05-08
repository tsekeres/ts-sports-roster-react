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
  position
}) => {
  const [player, setPlayer] = useState({
    imageUrl: imageUrl || '',
    name: name || '',
    position: position || '',
    firebaseKey: firebaseKey || null,
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      editPlayer(player).then((playersArray) => setPlayers(playersArray));
    } else {
      addPlayer(player).then((playersArray) => {
        setPlayers(playersArray);
      });
    }
  };

  return (
    <div className="player-form">
      <Form id="addPlayerForm" autoComplete="off" onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="imageUrl">Image URL:</Label>
          <Input
            name="imageUrl"
            type="text"
            placeholder="URL"
            value={player.imageUrl}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            name="name"
            type="text"
            placeholder="Player Name"
            value={player.name}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="position">Position:</Label>
          <Input
            name="position"
            type="text"
            placeholder="Player Position"
            value={player.position}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button color='success' type="submit">Submit</Button>
      </Form>
    </div>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  user: PropTypes.any
};

export default PlayerForm;
