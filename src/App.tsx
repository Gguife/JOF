import Footer from "./components/footer";
import Header from "./components/header";
import './global/style.css';
import { MainRouter } from "./router/MainRouter";

function App() {

  return (
    <>
      <Header />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App
