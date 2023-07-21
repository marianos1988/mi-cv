import "../stylesheets/Informacion.css";

export const Informacion = ()=> {

  const fecha = new Date();
  const fechaNacimiento = new Date("1988-01-16 00:00:00");
  const edad = Math.floor((fecha - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365.25));


  return(
    <article className="container-info-personal">
      <h2>Informacion Personal:</h2>
      <div  className="datos-personales">
        <ul>
          <li><u>Nombre:</u> Mariano Nicolas</li>
          <li><u>Apellido:</u> Szencis Yans</li>
          <li><u>DNI:</u> 33545320</li>
          <li><u>Fecha Nacimiento:</u> 16/01/1988</li>
          <li><u>Edad:</u> {edad}</li>
          <li><u>Domicilio:</u> Monte Castro - C.A.B.A.</li>
          <li><u>Celular:</u> 1123233335</li>
          <li><u>Email:</u> mariano.floresta@hotmail.com</li>
        </ul>
      </div>
    </article>
  );
}