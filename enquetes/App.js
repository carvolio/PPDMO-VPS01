import './App.css';
import { useState } from 'react';
import App1 from "./page1.js"
import App2 from "./page2.js";
import App3 from "./page3.js";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRWdRyYvmgs-1GvAYGFqqPo6KFbXEsGvw",
  authDomain: "enquete-77c9e.firebaseapp.com",
  projectId: "enquete-77c9e",
  storageBucket: "enquete-77c9e.firebasestorage.app",
  messagingSenderId: "13390494030",
  appId: "1:13390494030:web:4004462fe75b093f36c61f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function AppC() {
  const [tituloEnquete, setTituloEnquete] = useState("");
  const [opcaoEnquete, setOpcaoEnquete] = useState("");
  const [dataEnquete, setDataEnquete] = useState("");
  const [enquetes, setEnquetes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showPage1, setShowPage1] = useState(true);
  const [showPage2, setShowPage2] = useState(false);
  const [showPage3, setShowPage3] = useState(false);

  const adicionarEnquete = async () => {
    console.log("adicionarEnquete foi chamado!");
    try {
      setLoading(true);
      await addDoc(collection(db,"enquetes"),{
        titulo: tituloEnquete,
        opcao: opcaoEnquete,
        data: data()
      });
      alert("Enquete adicionada!");
      setTituloEnquete('');
      setOpcaoEnquete('');
      setDataEnquete('');
      fetchEnquetes();
    }catch (e) {
      console.error("Erro ao adicionar enquete", e);
    }finally {
      setLoading(false);
    }
  };
  
  const fetchEnquetes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "enquetes"));
      const enqueteLista = querySnapshot.docs.map(doc => doc.data());
      setEnquetes(enqueteLista);
      } catch (e) {
        console.error("Erro ao buscar Enquetes", e);
      }
  };

  const show1 = () => {
    setShowPage1(true);
    setShowPage2(false);
    setShowPage3(false);
  };
  const show2 = () => {
    setShowPage1(false);
    setShowPage2(true);
    setShowPage3(false);
  };
  const show3 = () => {
    setShowPage1(false);
    setShowPage2(false);
    setShowPage3(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>Enquete de Opinião</span>
        <div>
          <button type="button" href="page1.js" onClick={show1}>Login</button>
          <button type="button" href="page2.js" onClick={show2}>Criação</button>
          <button type="button" href="page3.js" onClick={show3}>Visualização</button>
        </div>
      </header>
      <App1 isVisible={showPage1}/>
      <App2 isVisible={showPage2}/>
      <App3 isVisible={showPage3}/>
    </div>
  );
}

export default AppC;