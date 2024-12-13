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
    linkCurso: 'https://professoroliveira.vercel.app/curso' 
  },
  {
    title: 'Piloto de aviao',
    image: airplane,
    linkCurso: 'https://professoroliveira.vercel.app/curso' 
  },
  {
    title: 'Piloto de helicoptero',
    image: heli,
    linkCurso: 'https://professoroliveira.vercel.app/curso' 
  },
  {
    title: 'Comissario de voo',
    image: comissario,
    linkCurso: 'https://professoroliveira.vercel.app/curso' 
  },
]