import './Home.scss';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';


const Home = ( {handleChange, click} ) => {
  

    return (
      <div className={ click === 0 ? "Home" : "hidden"}>
          <Typography variant="h1">Mercado Sol</Typography>
        <div>

          <p>Dejame darte una mano con la busqueda</p>
          <Button onClick={handleChange} >Comenzar la busqueda!</Button>
        </div>
      </div>
    );
  }
  
  export default Home;