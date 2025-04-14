import ProductList from './ProductList'
import { useState } from 'react';
import './App.css'

function App() {
  const products = useState([
    { name: 'Hat', price: 10, description: 'A stylish hat for a sunny day', img: './src/assets/hat.jpeg' },
    { name: 'Coat', price: 20, description: 'A warm coat for a chilly day', img: './src/assets/coat.jpeg' },
    { name: 'Shoes', price: 30, description: 'Comfortable shoes for every day', img: './src/assets/shoes.jpeg' },
  ]);

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products}/>
    </div>
  )
}

export default App
