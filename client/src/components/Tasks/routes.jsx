import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';

import Index from './index';
import New from './New';
import Edit from './Edit';
import Destroy from './Destroy';

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/tasks" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/tasks/new" component={New}/>
          <Route exact path="/tasks/edit/:id" component={Edit}/>
          <Route exact path="/tasks/destroy/:id" component={Destroy} />
        </>
      ) : null}
    </Switch>
  );
}
 
export default Routes;