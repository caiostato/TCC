import { React } from 'react'
import { Provider } from 'react-redux'

import Routing from './routes/routes';

import store from './context'

import './app.css';


function App() {

  return (
      <Provider store={store}>
        <Routing/>
      </Provider>
  );
}

export default App;
