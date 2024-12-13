import './style.css';
import { RiInstagramFill, RiLinkedinBoxFill, RiFacebookBoxFill, RiArrowRightLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href=""><RiInstagramFill /></a>
        <a href=""><RiLinkedinBoxFill /></a>
        <a href=""><RiFacebookBoxFill /></a>
        <p>Me siga nas redes sociais <RiArrowRightLine /></p>
      </div>
      <hr />
      <p className='credits'>© 2024 . built by Guilherme Gomes</p>
    </footer>
  )
}


export default Footer;