// ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRating from '../RatingStars';
import { Card, Button } from 'react-bootstrap';

function ProductDetail({productos, handleSearch}) {

  const { id } = useParams();
  const producto = productos.find((p) => p.id.toString() === id);

  const [nuevo, setNuevo] = useState({});

  function generarNumeroAleatorio() {
 
    return Math.floor(Math.random() * 5) + 1;
  }


  if (!producto) {
    return <p>Producto no encontrado</p>;
  }

  const [searchTerm, setSearchTerm] = useState('');

  const handleLocalSearch = (event) => {

    const term = event.target.value;
    const producto = productos.find((p) => p.nombre.toString().includes(term));
    setSearchTerm(term);
// Llama a la función handleSearch del padre para realizar la búsqueda en el servidor
    handleSearch(term);
    if(producto){
        console.log('producto encontrado');
        setNuevo(producto);
        console.log(nuevo);

        
    }else{

      console.log("Producto no encontrado");
    }
   
  };



  return (

    <div>

   <div className='container'>

   <div className="mt-3">
        {/* Caja de búsqueda */}
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleLocalSearch}
          className="form-control"
        />
      </div>

      <h1 className="text-center mt-4 mb-3">Detalle del Producto</h1>

      <Card className="mx-auto" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/img/${producto.img}`} alt={producto.nombre} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.stock} productos en existencia</Card.Text>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>Precio: ${producto.precio} pesos MXN</Card.Text>
          {/* Agrega más detalles del producto según sea necesario */}
          <div className='text-center'>
          <StarRating totalStars={5} rating={generarNumeroAleatorio()} />
           <hr />
          <Button variant="primary">Comprar</Button>
          </div>
         
        </Card.Body>
      </Card>


   </div>


    </div>
  );
}

export default ProductDetail;
