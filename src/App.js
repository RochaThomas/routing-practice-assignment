import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import DispInput from './components/DispInput';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={'/:varInput/:wordColor/:bgColor'}>
          <DispInput/>
        </Route>
        <Route path={'/:varInput'}>
          <DispInput/>
        </Route>
        <Route path={'/home'}>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
