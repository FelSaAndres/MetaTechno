//import logo from './logo.svg';
import Cabezera from './Componentes/Header/Cabezera';
import ListaProductos from './Componentes/Header/ItemListContainer';
import DetalleProducto from './Componentes/Header/ItemDetailsConteiner';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Cabezera />
      <Routes>
        <Route path='/' element={<ListaProductos />}/>
        <Route path='/category/:categoryName' element={<ListaProductos />}/>
        <Route path='/item/:itemID' element={<DetalleProducto />}/>
        <Route path='/cart' element={<ListaProductos />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
