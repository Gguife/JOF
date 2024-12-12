import turbina from '../assets/turbina.png';
import airplane from '../assets/airplane.png';
import heli from '../assets/heli.png';
import comissario from '../assets/comissario.png';

interface ImagesPrototype {
  title: string;
  image: string;
  linkCurso: string;
}

export const carouselMock: ImagesPrototype[]= [
  {
    title: 'Mecânico de aeronaves',
    image: turbina,
    linkCurso: 'http://localhost:3000/test' 
  },
  {
    title: 'Piloto de aviao',
    image: airplane,
    linkCurso: 'http://localhost:3000/test' 
  },
  {
    title: 'Piloto de helicoptero',
    image: heli,
    linkCurso: 'http://localhost:3000/test' 
  },
  {
    title: 'Comissario de voo',
    image: comissario,
    linkCurso: 'http://localhost:3000/test' 
  },
]