import "../stylesheets/Proyectos.css";

export const Proyectos = ()=> {
  return(
    <article className="container-proyectos">
    <h2>Proyectos:</h2>
    <div className="lista-proyectos">
      <div className="bloque">
        <div className="periodo">2023</div>
          <div className="container-detalle-proyecto">
            <div className="detalle-proyecto">Aplicacion de tareas - Permite crear notas, tacharlas y eliminarlas</div>
            <div className="detalle-proyecto">Tecnologias: HTML - CSS - Javascript - ReactJS</div>
            <div className="repositorio">Repositorio: </div>
          </div>
      </div>
      <div className="bloque">
        <div className="periodo">2023</div>
          <div className="container-detalle-proyecto">
            <div className="detalle-proyecto">Calculadora - Clásica calculadora que permite sumar, restar, dividir y multiplicar numeros</div>
            <div className="detalle-proyecto">Tecnologias: HTML - CSS - Javascript - ReactJS</div>
            <div className="repositorio">Repositorio: </div>
          </div>
      </div>
      <div className="bloque">
        <div className="periodo">2023</div>
          <div className="container-detalle-proyecto">
            <div className="detalle-proyecto">SysGym - Sistema de administración de socios, manejo de caja con reporte y notificacion de cumpleaños</div>
            <div className="detalle-proyecto">Tecnologias: HTML - CSS - Javascript - NodeJS - MySQL</div>
            <div className="repositorio">Repositorio: </div>
          </div>
      </div>
    </div>
  </article>
  );
}