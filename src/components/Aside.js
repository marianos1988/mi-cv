import "../stylesheets/Aside.css";
import { BotonAside } from "./BotonAside";


export const Aside = ({ viewScreen }) => {


const recibirScreen = (useScreen)=>{
  viewScreen(useScreen);
}

  return(
    <aside className="container-aside">
        <div className="container-objetives">
          <div className="titulo-objetives">Objetivo:</div>
          <p className="text-objetives">
            Participar de un equipo de trabajo que potencie el desarrollo de mi carrera aprendiendo diariamente de mis pares y superiores.
          </p>
        </div>
        <BotonAside
          screenEntrada="Informacion"
          screenSalida={recibirScreen}
        >Informacion</BotonAside>
        <BotonAside 
          screenEntrada="Educacion"
          screenSalida={recibirScreen}
        >Educacion</BotonAside>
        <BotonAside 
          screenEntrada="Cursos"
          screenSalida={recibirScreen}
        >Cursos</BotonAside>
        <BotonAside
          screenEntrada="Experiencia"
          screenSalida={recibirScreen}
        >Experiencia</BotonAside>
        <BotonAside
          screenEntrada="Skills"
          screenSalida={recibirScreen}
        >Skills</BotonAside>
        <BotonAside
          screenEntrada="Proyectos"
          screenSalida={recibirScreen}
        >Proyectos</BotonAside>
    </aside>
  );
}