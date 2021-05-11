import React from 'react';
import PropTypes from 'prop-types';
// import UserInfoCard from '../components/UserInfo';

function Home({ user }) {
  return (
    <div className="user-welcome">
      <h1>Welcome to TSSports</h1>
      <hr></hr>
      {/* <h1>
        <img
          className="user-data"
          src={user.profileImage}
          alt="Card image cap"
        ></img>
        {user.fullName}
        <h4>Manager</h4>
      </h1> */}
      {/* <div className="user-data"><UserInfoCard user={user} /></div> */}
      <hr></hr>
      {user ? <h2>Your team awaits</h2> : <h2>Please Log In</h2>}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
