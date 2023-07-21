import Foto from '../img/FOTO.jpg';
import "../stylesheets/Header.css";
import { AiFillLinkedin } from 'react-icons/ai';

export const Header = () => {
  return(
      <header className="container-header">
        
        <div className="container-img-info">
          <img 
            className='img'
            src={Foto}
            alt="Imagen Perfil"
          />
          <div className="container-datos-perfil">
            <h1>Curriculum Vitae</h1>
            <div className="datos-perfil">Mariano Nicolas Szencis Yans</div>
            <div className="datos-perfil">Aplication Support & Networking</div>
            <div className="datos-perfil">Desarrolador Full Stack</div>
            <div className="datos-perfil">Javascript | ReactJS | NodeJS | Python | MySQL</div>
            <div className='redes'><a href='https://www.linkedin.com/in/mariano-nicolas-szencis-yans-883b52252/'>Mi red linkedin <AiFillLinkedin className='ico-linkedin'/></a></div>
          </div>
        </div>
      </header>
  );
}

