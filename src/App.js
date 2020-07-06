import React, { Component } from 'react';
import {Provider} from 'react-redux'; // repassar os componentes um tipo de informação//

import Siderbar from './components/Siderbar/';
import Video from './components/Video/';

import store from './store';

class App extends Component() {

 

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Siderbar  />
          <Video />
        </Provider>
      </div>
    );
  }
}

export default App;
