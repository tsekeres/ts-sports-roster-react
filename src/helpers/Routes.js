import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';

export default function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/players'
          user={user}
          component={() => (
            <Players players={players} setPlayers={setPlayers} />
          )}
        />
        <Route
          user={user}
          path='/players/:firebaseKey'
          component={SinglePlayer}
        />
        <Route
          user={user}
          path='/add-players'
          component={() => <AddPlayer setPlayers={setPlayers} />}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any,
};
