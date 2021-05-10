import React from 'react';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';
import PropTypes from 'prop-types';

const UserInfoCard = ({ user }) => (
  <Card body>
    <CardImg top width="100%" src={user.profileImage} alt="Card image cap" />
    <CardBody>
      <CardTitle tag="h5">{user.fullName}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Manager</CardSubtitle>
    </CardBody>
  </Card>
);

UserInfoCard.propTypes = {
  user: PropTypes.any
};

export default UserInfoCard;
