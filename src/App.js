import './App.scss';
import React, { useState, useEffect } from 'react';
import Home from './components/Home'
import Header from './components/Header'
import Card from './components/Card'




const App = () => {
  const [click, setClick] = useState(0)
  const [busqueda, setBusqueda] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState(busqueda)
  const [valorDelInput, setValorDelInput] = useState('')

  const [busquedaDeProducto, setBusquedaDeProducto] = useState([])

  const [valor, setValor] = useState("")

  useEffect(() => {
    // console.log("DENTRO DEL EFFECT", valorDelFetch)
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${valor}`)
      .then(res => res.json())
      .then(data => {
        setBusqueda(data.results)
      })

  }, [click, busquedaDeProducto]);
    
  console.log(busqueda)

  const handleChange = () => {
    setClick (click + 1)
    console.log("click")
  }

  const busquedaSubmit = () => {
    setBusquedaDeProducto(valorDelInput)
  }
 


 const handleSearchText = (e) => {
    setValor(e.target.value)
    e.target.value === "" ? setProductosFiltrados(busqueda) 
    : setProductosFiltrados(
      [...busqueda].filter((product) => {
        return product.title.toLowerCase().includes(e.target.value)
      }))
    }
console.log(valor)

  return (
    <div className="App">
      <Home click={click} handleChange={handleChange}/>
      
      <Header click={click} handleSearchText={handleSearchText} busquedaSubmit={busquedaSubmit} valorDelInput={valorDelInput} setValorDelInput={setValorDelInput}/>
      <section>
        { productosFiltrados.map(producto =>
        <Card key={producto.id}
          click = {click}
          thumbnail={producto.thumbnail}
          title={producto.title}
          price={producto.price}
          shipping={producto.shipping.free_shipping}

        />

      
          
      )}
      </section>
      
    </div>
  );
}

export default App;
