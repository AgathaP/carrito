import React, { useState, useEffect } from 'react';
import './App.css';
import Producto from './Componentes/Producto';
import Navegacion from './Componentes/Navegacion';
import { Container, Row } from 'reactstrap';
//import { listaProducto } from './listaProducto.json';

const App = () => {
// constructor () {
//   super();
//     this.state = {
//       listaProducto
//     }
// }
const[ producto, setProducto ] = useState([]);
console.log('producto', producto);
useEffect(() => {
  fetch('http://localhost:3000/listaProducto')
    .then(Response => Response.json())
    .then(data => setProducto(data));
}, []);

    const aregloComponentes = producto.map(
      (producto, i) => {
        return (
        <Producto
        key={i}
        titulo = {producto.titulo}
        imagen = {producto.imagen}
        descripcion = {producto.descripcion}
        precio = {producto.precio}
        stock = {producto.stock}
        />)
      }
    );
    return (
      <Container>
        <Navegacion titulo="Cursos a tu medida"></Navegacion>
        <Row>
          {aregloComponentes}
        </Row>
      </Container>
    );
}

export default App;
