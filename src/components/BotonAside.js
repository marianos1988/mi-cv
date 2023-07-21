import "../stylesheets/BotonAside.css";


export const BotonAside = ({ children, screenEntrada, screenSalida}) => {

  const selectScreen = () => {
      screenSalida(screenEntrada);
  }
   
  return(
    <>
      <button 
        className="boton-aside"
        onClick={selectScreen}>
          {children}
      </button>
    </>
  );
}