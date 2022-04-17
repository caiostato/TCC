import { React } from 'react'

import Routing from './routes/routes';
import database from './config/dbserver';


import './app.css';
import { onValue,ref } from 'firebase/database';

function App() {

  const db = ref(database,'Unidade')
  onValue(db, (snapshot) => {
    console.log(snapshot)
  })

  return (
      <Routing/>
  );
}

export default App;
