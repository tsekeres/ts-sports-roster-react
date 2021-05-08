import React, { useState } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../helpers/data/PlayerData';
import PlayerForm from './PlayerForm';

const PlayerCard = ({
  firebaseKey,
  imageUrl,
  name,
  position,
  setPlayers,
  user
}) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then(setPlayers);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card>
      <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {position}
        </CardSubtitle>
        <Button color="info" onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Player'}</Button>
        {
          editing && <PlayerForm
          formTitle='Edit Player'
          setPlayers={setPlayers}
          firebaseKey={firebaseKey}
          imageUrl={imageUrl}
          name={name}
          position={position}
          user={user}
          />
        }
        <Button color="danger" onClick={() => handleClick('delete')}>Cut Player</Button>
      </CardBody>
    </Card>
  );
};

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};

export default PlayerCard;
