import './style.css';
import Carousel from "../../components/carousel";
import { certificates } from '../../mock/certificadosMock';
import { FaCertificate } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Perfil from '../../assets/profile.jpg';
import { useState } from 'react';


const Home = () => {
  const [visibleCertificates, setVisibleCertificates] = useState(8);


  const handleShowMore = () => {
    setVisibleCertificates((prev) => prev + 8);
  }

  return (
    <>
      <Carousel />
      <section className='about-me' id='about'>
        <div className="about-container">
          <div className="about-profile">
            <img src={Perfil} alt="" />
            <p>Jailton Oliveira Ferreira</p>
          </div>
          <div className="about-certificate">
            <div className="certificate-container">
              {certificates.slice(0, visibleCertificates).map((certificate) => (
                <div className='certificate'>
                  <p className='certificate-title'>{certificate.title}</p>
                  <p className='certificate-institution'>{certificate.institution}</p>
                  <p className='certificate-date'>{certificate.date}</p>
                  <span><FaCertificate className='icon-certificate-card'/></span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {visibleCertificates < certificates.length && (
          <button onClick={handleShowMore} className='show-more'>Mostrar mais <MdKeyboardDoubleArrowDown className="show-more-icon" /></button>
        )}
      </section>
    </>
  )
}

export default Home;