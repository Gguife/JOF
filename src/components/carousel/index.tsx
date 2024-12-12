import './style.css';
import { useEffect, useState } from 'react';
import { carouselMock } from '../../mock/carouselMock';
import { IoIosArrowForward } from "react-icons/io";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const totalImages = carouselMock.length;

  const goToNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % totalImages);
      setTransitioning(false);
    }, 1500); // Tempo sincronizado com o CSS
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      {carouselMock.map((item, index) => (
        <div
          key={index}
          className={`full-screen-image ${
            index === currentIndex
              ? 'image-enter-active'
              : 'image-exit-active'
          }`}
          style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
        >
          <img src={item.image} alt={item.title} />
          <div className="overlay">
            <div className="overlay-content">
              <h2>{item.title}</h2>
              <p>Curso completo</p>
              <a href={item.linkCurso}>
                Ver curso <IoIosArrowForward className="curso-button-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="indicators">
        {carouselMock.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => !transitioning && setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;