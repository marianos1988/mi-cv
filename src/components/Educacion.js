import "../stylesheets/Educacion.css";

export const Educacion = ()=> {

  return(
   <article className="container-educacion">
    <h2>Educacion:</h2>
    <div className="lista-educacion">
      <div className="bloque">
        <div className="periodo">2000-2005</div>
        <div className="container-titulo-institucion">
          <div className="titulo">Perito Mercantil con oirientacion contable</div>
          <div className="institucion">Comercial N° 30 Esteban Agustin Gascón</div>
        </div>
      </div>
      <div className="bloque">
        <div className="periodo">1993-2000</div>
        <div className="container-titulo-institucion">
          <div className="titulo">Primario Completo</div>
          <div className="institucion">Coronel de Marina Leonardo Rosales</div>
        </div>
      </div>
    </div>
   </article>       
  )
} 