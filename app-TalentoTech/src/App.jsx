import {Layout} from './componentes/layout/Layout';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
import Productos from './componentes/producto/Producto';
import {Routes, Route} from 'react-router-dom';
import {FormularioContainer} from './componentes/FormularioContainer/FormularioContainer';
import ProductoDetalle from './componentes/producto/ProductoDetalle';
import {Inicio} from './componentes/Inicio/Inicio';
import Cart from './componentes/Cart/Cart';
import './App.css'


function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/productos' element={<Productos Mensaje="Listado de productos"/>}/>
        <Route path='/destacados' element={<ItemListContainer Mensaje="Productos destacados"/>}/>
        <Route path='/alta-productos' element={<FormularioContainer Mensaje="Formulario de alta de productos"/>}/>
        <Route path='/productos/:id' element={<ProductoDetalle/>}/>
        <Route path='/carrito' element={<Cart/>}/>
      </Route>
    </Routes>
  );
}

export default App;