import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import SearchResults from './pages/SearchResults';
import { useState, useEffect } from 'react';



function App() {
   
  const [productos, setProductos] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/productos');
        const data = await response.json();
        setProductos(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData(); 
  }, []); 


  const handleSearch = async (searchText) => {
    try {
      const response = await fetch(`http://localhost:8080/productos/filtro?filtro=${searchText}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error al obtener resultados de búsqueda:', error);
    }
  };
  return (

    <div>






<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">E-Comerce Bazar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>













      
 <Routes>
  
  <Route path="/" element={<Home onSearch={handleSearch}/>}></Route>
  <Route path="/items" element={<SearchResults searchResults={searchResults} handleSearch = {handleSearch} />}></Route>
  <Route path="/item/:id" element={<ProductDetail productos={productos}  handleSearch = {handleSearch}/> } ></Route>

</Routes>
    </div>
    

     
  );
}

export default App;
