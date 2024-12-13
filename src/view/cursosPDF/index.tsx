import PDF from '../../assets/pdf.png';
import './style.css';

const CursoPage = () => {
  return (
    <section className='cursoPage-section'>
      <div className="cursoPage-content">
        <img src={PDF} alt="" />
        <p>Baixe o PDF completo do curso de</p>
        <span>NOME DO CURSO</span>
        <button>Download</button>
      </div>
    </section>
  )
}

export default CursoPage;