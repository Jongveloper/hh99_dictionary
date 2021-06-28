import React from 'react';
import Dict from './Dict';
import AddDict from './AddDict';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App(props) {

  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Dict} />
        <Route path="/adddict" component={AddDict} />
      </Switch>
      {/* //add 로바꾸기.. */}
      {/* 스위치 조사. */}
      {/* useref */}
    </div>
    </BrowserRouter>
  );
}



export default App;
