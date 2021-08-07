import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginForm from './components/Login'
import Home from './components/Home'

import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import RestaurantDetails from './components/RestaurantDetails'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <ProtectedRoute
        exact
        path="/restaurant/:id"
        component={RestaurantDetails}
      />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
