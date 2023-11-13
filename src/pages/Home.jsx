// Home.js
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


function Home( {onSearch}) {
  
   
    const [searchText, setSearchText] = useState();
    const navigate = useNavigate();
  
    const handleSearch = () => {
      onSearch(searchText);
      navigate('/items?search=' + searchText); // Utiliza useNavigate para navegar
    };
  
    return (

      <div className='container text-center' style={{marginTop: '250px'}}>


     <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <h1>¡Hola!</h1>
      <h1 className="text-center mb-4">Bienvenido a nuestra tienda de bazar</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='¿Que estas buscando?'
        className="form-control mb-2"
      />
      <button onClick={handleSearch} className="btn btn-primary">
        Buscar
      </button>
    </div>
      </div>

      
    );
}

export default Home;
