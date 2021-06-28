import React from 'react';
import Dict from './Dict';
import DictInput from './DictInput';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App(props) {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dict} />
        <Route path="/dictinput" component={DictInput} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}



export default App;
