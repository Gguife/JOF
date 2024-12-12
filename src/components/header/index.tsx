import './style.css';
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);  
  }

  return (
    <header>
      <h1>PROFESSOR OLIVEIRA</h1>

      <nav>
        <a href="" className='about'>Sobre mim</a>
        <div className="cursos-container">
          <p onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>cursos <IoIosArrowDown className='cursos-icon' /></p>
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`container ${isVisible ? 'visible' : 'hidden'}`}>
            <a href="" >Mecânico de aeronaves</a>
            <hr />
            <a href="">Piloto privado avião</a>
            <hr />
            <a href="">Piloto privado Helicóptero</a>
            <hr />
            <a href="">Comissário de voo</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;