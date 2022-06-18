//import logo from './logo.svg';
import Cabezera from './Componentes/Header/Cabezera';
import ListaProductos from './Componentes/Header/ItemListContainer';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <Cabezera />
      <ListaProductos />
    </div>
  );
}

export default App;
