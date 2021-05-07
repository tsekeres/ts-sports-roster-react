import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import NotFound from '../views/NotFound';
import Team from '../views/Team';
import Home from '../views/Home';
import AddPlayer from '../views/AddPlayer';

export default function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/not-found' component={NotFound} />
        <Route
          exact
          path='/team'
          user={user}
          component={() => <Team players={players} setPlayers={setPlayers} />}
        />
        <Route
          user={user}
          path='/team/:firebaseKey'
          // component={SinglePlayer}
        />
        <Route
          user={user}
          path='/add-players'
          component={AddPlayer}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
};
