import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './componentes/Login';
import CrearCuenta from './componentes/CrearCuenta';
import Admin from './componentes/Admin';
import Home from './componentes/Home';
import CrearCategoria from './componentes/CrearCategoria';
import ActualizarCategoria from './componentes/ActualizarCategoria';
import HomeProductos from './componentes/productos/HomeProductos';
import CrearProducto from './componentes/productos/CrearProducto';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element = {<Home/>} />
        <Route path="/login" exact element = {<Login/>} />
        <Route path="/crear-cuenta" exact element = {<CrearCuenta/>} /> 
        {/* Se crea una ruta adicional ej http://localhost:3000/crear-cuenta */}
        <Route path="/admin" exact element = {<Admin/>} />
        <Route path="/crear-categorias" exact element = {<CrearCategoria/>} />
        <Route path="/actualizar-categoria/:idCategoria" exact element = {<ActualizarCategoria/>} />
        <Route path="/home-productos/:idCategoria" exact element = {<HomeProductos/>} />
        <Route path="/crear-producto/:idCategoria" exact element = {<CrearProducto/>} />
      </Routes>
    </Router>
  );

}

export default App;