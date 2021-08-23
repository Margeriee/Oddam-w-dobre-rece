import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Content} from './components/Content/Content';
import {Navigation} from './components/Menu/Navigation';
import {LoginMenu} from './components/Menu/LoginMenu';
import {LoginForm} from './components/LoginForm/LoginForm';
import {RegistrationForm} from './components/RegistrationForm/RegistrationForm';
import './styles/reset.scss';
import './App.scss';

function App() {
  return (
      <BrowserRouter>
            <header className="header">
              <LoginMenu/>
              <Navigation/>
            </header>
            <Switch>
              <Route exact path='/' component={Content} />
              <Route path='/login' component={LoginForm} />
              <Route path='/register' component={RegistrationForm} />
            </Switch>
      </BrowserRouter>
  );
}

export default App;
