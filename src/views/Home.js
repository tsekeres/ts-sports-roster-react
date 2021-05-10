import React from 'react';
import PropTypes from 'prop-types';
import UserInfoCard from '../components/UserInfo';

function Home({ user }) {
  return (
    <div className="user-welcome">
      <h1>Welcome to TSSports</h1>
      <hr></hr>
      <div className="user-data"><UserInfoCard user={user} /></div>
      <hr></hr>
      { user ? <h2>Your team awaits</h2> : <h2>Please Log In</h2>}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
