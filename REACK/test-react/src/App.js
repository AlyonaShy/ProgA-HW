//import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight, faChevronLeft, faChevronRight, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'
import Carusel from './components/Carusel';
import Button from './components/button';
import img1 from './imgbaner/1.jpg';
import img2 from './imgbaner/2.jpg';
import img3 from './imgbaner/3.jpg';



function App() {
  const imgMass = [
    { imgBaner: img1 },
    { imgBaner: img2 },
    { imgBaner: img3 }
  ]

  return (
    
    <div className = "container">
      
      <Button></Button>
      <Carusel imgBaner={imgMass[0].imgBaner}></Carusel>
      <Carusel imgBaner={imgMass[1].imgBaner}></Carusel>
      <Carusel imgBaner={imgMass[2].imgBaner}></Carusel>
      <Button></Button>
    </div>
  );
}

export default App;
