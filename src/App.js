import './App.css';
import { Aside } from './components/Aside';
import { Header } from "./components/Header";
import { useState } from "react";
import { Informacion } from './components/Informacion';
import { Educacion } from './components/Educacion';
import { Cursos } from './components/Cursos';
import { Experiencia } from './components/Experiencia';
import { Skills } from './components/Skills';
import { Proyectos } from './components/Proyectos';



function App() {

  const [useScreen,setUseScreen] = useState("");

  const mostrarArticle = (articulo) => {
    setUseScreen(articulo);
    console.log(useScreen);

  }
  
  return (
    <div className="App">
      <Header />
      <main className="container-section">
       
        <Aside 
          viewScreen = {mostrarArticle}
        />
        {(useScreen === "Informacion") ? <Informacion /> : ""}
        {(useScreen === "Educacion") ? <Educacion /> : ""}
        {(useScreen === "Cursos") ? <Cursos /> : ""}
        {(useScreen === "Experiencia") ? <Experiencia /> : ""}
        {(useScreen === "Skills") ? <Skills /> : ""}
        {(useScreen === "Proyectos") ? <Proyectos /> : ""}
      </main>
    { }
    </div>
  );
}

export default App;
