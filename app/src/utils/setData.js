import { ref, onValue } from 'firebase/database'
import database from '../services/firebase';

function SetData(){

    const unidade = []
    const starCountRef = ref(database, 'Unidade/');
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        let keysNames = Object.keys(data)

        for(let i=0; i<keysNames.length;i++){
            unidade.push(data[keysNames[i]])
        }
    });

    return unidade
}

export default SetData







