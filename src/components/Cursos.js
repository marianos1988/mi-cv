import "../stylesheets/Cursos.css";

export const Cursos = () => {
  return(
    <article className="container-cursos">
    <h2>Cursos:</h2>
    <div className="lista-cursos">
      <div className="bloque">
        <div className="periodo">2023</div>
        <div className="container-detalle-cursos">
          <div className="detalle-curso">Curso Git & GitHub</div>
          <div className="detalle-curso">Curso ReactJS</div>
          <div className="detalle-curso">Curso MySQL</div>
          <div className="detalle-curso">Curso Python</div>
          <div className="detalle-curso">Curso NodeJS</div>
        </div>
      </div>
      <div className="bloque">
        <div className="periodo">2022</div>
        <div className="container-detalle-cursos">
          <div className="detalle-curso">Curso Javascript</div>
          <div className="detalle-curso">Curso CSS</div>
          <div className="detalle-curso">Curso HTML</div>
        </div>
      </div>
      <div className="bloque">
        <div className="periodo">2016</div>
        <div className="container-detalle-cursos">
          <div className="detalle-curso">
            Windows Server 2012 R2 (70-410) Install and Configure Servers
          </div>
        </div>
      </div>
      <div className="bloque">
        <div className="periodo">2015</div>
        <div className="container-detalle-cursos">
          <div className="detalle-curso">Curso de Redes Básico - UTN</div>
          <div className="detalle-curso">Curso de Redes Avanzado - UTN</div>
        </div>
      </div>
      <div className="bloque">
        <div className="periodo">2012</div>
        <div className="container-detalle-cursos">
          <div className="detalle-curso">Curso de JAVA para no programadores - EducacionIT</div>
          <div className="detalle-curso">Curso de Introducción de Base de Datos - EducacionIT</div>
          <div className="detalle-curso">Curso Introducción Paradigma de objetos - EducacionIT</div>
          <div className="detalle-curso">Curso Java Standard - EducacionIT</div>
          <div className="detalle-curso">Curso de O&M Básico e Intermedio de Central Telefónica
Matrix Eternity.</div>
        </div>
      </div>
    </div>
   </article>     
  )
}