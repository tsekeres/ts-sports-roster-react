import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const PlayerCard = ({
  // firebaseKey,
  imageUrl,
  name,
  position
}) => (
  <Card>
    <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{name}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">
        {position}
      </CardSubtitle>
      <Button color="info">Edit Player</Button>
      <Button color="danger">Cut Player</Button>
    </CardBody>
   </Card>
);

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default PlayerCard;
