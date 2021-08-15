import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Start from './pages/Start';
import Add from './pages/Add';


class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Start} />
          <Route path="/main" component={Main} />
          <Route path="/add" component={Add} />

        </BrowserRouter>
      </div>
    )
  }
}

export default App;