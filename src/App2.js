import './App.css';
import { useState, useEffect } from 'react';
import { firebase, db} from './firebaseConfig';
import { QuerySnapshot } from 'firebase/firestore';
import { collection, getDocs } from "firebase/firestore";

async function App2() {
    const ref = firebase.firestore().collection("Users");
    console.log(ref);

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    function getData(){
        ref.onSnapShot((QuerySnapshot)); 

    }

    const querySnapshot = await getDocs(collection(database, "Users"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    });


    return (
        <div className='App'>
            <h1> Firebase FireStore Database </h1>
        </div>
    );
}


export default App2;
