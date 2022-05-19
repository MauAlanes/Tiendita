import '../styles/App.css';
import { Cabecera } from './Cabecera';
import { Adidas } from './Adidas/Adidas';
import { Nike } from './Nike/Nike';
import { Puma } from './Puma/Puma';

function App() {
  return (
    <><Cabecera/>
    <Adidas/>
    <Nike/>
    <Puma/></> 
  );
}

export default App;