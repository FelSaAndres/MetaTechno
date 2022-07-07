//import logo from './logo.svg';
import Cabezera from './Componentes/Header/Cabezera';
import ListaProductos from './Componentes/Header/ItemListContainer';
import DetalleProducto from './Componentes/Header/ItemDetailsConteiner';
import './App.css';


const App = () => {
  return (
    <div className='App'>
      <Cabezera />
      <ListaProductos />
      <DetalleProducto />
    </div>
  );
}

export default App;
