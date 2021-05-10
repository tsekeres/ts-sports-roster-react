import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Team from '../views/Team';
import Home from '../views/Home';
import AddPlayer from '../views/AddPlayer';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user ? (<Component {...taco} user={user} />) : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};
function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" user={user} component={Home} />
        <PrivateRoute
          exact
          path="/team"
          user={user}
          component={() => (
            <Team user={user} players={players} setPlayers={setPlayers} />
          )}
        />
        <PrivateRoute
          exact
          path="/add-players"
          user={user}
          component={() => <AddPlayer user={user} setPlayers={setPlayers} />}
        />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
};

export default Routes;
