import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../RatingStars';
import '../App.css'

const SearchResults = ({ searchResults, handleSearch }) => {




  function generarNumeroAleatorio() {
 
    return Math.floor(Math.random() * 5) + 1;
  }

  console.log(generarNumeroAleatorio());


  const productRating = 4; // Valor de ejemplo
  const [searchTerm, setSearchTerm] = useState('');

  const handleLocalSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Llama a la función handleSearch del padre para realizar la búsqueda en el servidor
    handleSearch(term);
  };

  return (
    <div className='container'>
      <hr />
      <div>
        <h2>¿Buscas mas cosas?</h2>
      </div>
      <div>
        {/* Caja de búsqueda */}
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleLocalSearch}
          className="form-control"
        />
      </div>

      {searchResults && searchResults.length > 0 ? (
  <div className="mt-4">
    <p className="mb-3">Se han encontrado {searchResults.length} coincidencias de tu producto</p>

    <div className="row">
      <h1 className="text-center">Resultados de Búsqueda</h1>

      <hr />
      <br />

      {searchResults.map((producto) => (
        <div key={producto.id} className="col-md-4 mb-4">
          <div className="card card-hover">
            {/* Imagen del producto */}
            <img
              className="card-img-top"
              src={`/img/${producto.img}`}
              alt={producto.nombre}
              width={20}
            />
            <hr />
            <div className="card-body">
          
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Precio: ${producto.precio} pesos MXN</p>
              <p className="card-text">Marca: {producto.marca}</p>

              <div className='text-center'>

              <StarRating totalStars={5} rating={generarNumeroAleatorio()} />
              <hr />

              {/* Agrega más detalles del producto según sea necesario */}
              <Link to={`/item/${producto.id}`}>
                <button className="btn btn-primary">Detalle</button>
              </Link>

              </div>
          
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
) : (
  <p>No se encontraron resultados</p>
)}

    </div>
  );
};

export default SearchResults;


