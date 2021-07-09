import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import UseApi from '../../pages/UseApi';

const App = () => (
  <div>
    <div>
      <a href="/use-api">UseApi</a>
    </div>
    <BrowserRouter>
      <Route exact path="/use-api" component={UseApi} />
    </BrowserRouter>
  </div>
);
export default App;
