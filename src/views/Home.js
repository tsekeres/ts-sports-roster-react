import React from 'react';
import PropTypes from 'prop-types';

function Home({ user }) {
  return (
    <div>
      <h1>Welcome to TSSports</h1>
      <hr></hr>
      { user ? <>
          <img>{user.profileImage}</img>
          <br></br>
          <h2>{user.fullName}</h2>
        </> : <h2>Please Log In</h2>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
