import React from 'react'
import { Route } from 'react-router'
import App from './containers/App'

import About from './components/About'
import Dashboard from './containers/Dashboard'
import ViewAll from './containers/ViewAll'
import PassportAuth from './containers/PassportAuth'
import Logout from './containers/Logout'

export default (
  <Route name = 'home' component = {App}>
  	<Route path = '/' name = 'about' component = {About} />
  	<Route path = 'dashboard' name = 'dashboard' component = {Dashboard} />
  	<Route path = 'view-all' name = 'view-all' component = {ViewAll} />
  	<Route path = 'account' name = 'account' component = {PassportAuth} />
  	<Route path = 'logout-success' name = 'logout-success' component = {Logout} />
  </Route>
);
