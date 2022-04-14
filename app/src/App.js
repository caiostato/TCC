import { React } from 'react'

import Routing from './routes/Routes';
import database from './config/dbServer';

import './App.css';
import { onValue,ref } from 'firebase/database';

function App() {

  const db = ref(database,'Unidade')
  onValue(db, (snapshot) => {
    console.log(snapshot)
  })

  return (
    <Routing></Routing>
  );
}

export default App;
