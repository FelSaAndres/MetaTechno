//import logo from './logo.svg';
import Cabezera from './Componentes/Header/Cabezera';
import ListaProductos from './Componentes/Header/ItemListContainer';
import DetalleProducto from './Componentes/Header/ItemDetailsConteiner';
import Carrito from './Componentes/Header/Cart';
import Formulario from './Componentes/Header/Formulario';
import './App.css';
import CustomProvider from './Componentes/Header/CartContext';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 



const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Cabezera />
        <Routes>
          <Route path='/' element={<ListaProductos />}/>
          <Route path='/category/:categoryName' element={<ListaProductos />}/>
          <Route path='/item/:itemID' element={<DetalleProducto />}/>
          <Route path='/cart' element={<Carrito />}/>
          <Route path='/form' element={<Formulario />}/>
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;
