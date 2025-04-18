import ProductList from './components/ProductList'
import { useState } from 'react';
import './App.css'

function App() {
  const products = useState([
    { name: 'Hat', price: 10, description: 'A stylish hat for a sunny day', img: './src/assets/hat.jpeg' },
    { name: 'Coat', price: 20, description: 'A warm coat for a chilly day', img: './src/assets/coat.jpeg' },
    { name: 'Shoes', price: 30, description: 'Comfortable shoes for every day', img: './src/assets/shoes.jpeg' },
    { name: 'Shirt', price: 40, description: 'A casual shirt for everyday wear', img: './src/assets/shirt.jpeg' },
    { name: 'Pants', price: 50, description: 'Stylish pants for any occasion', img: './src/assets/pants.jpeg' },
    { name: 'Socks', price: 60, description: 'Warm socks for cold days', img: './src/assets/socks.jpeg' },
    { name: 'Belt', price: 70, description: 'A stylish belt to complete your outfit', img: './src/assets/belt.jpeg' },
    { name: 'Gloves', price: 80, description: 'Warm gloves for cold days', img: './src/assets/gloves.jpeg' },
  ]);

  return (
    <div className="App">
      <h1>Product List</h1>
      <ProductList products={products}/>
    </div>
  )
}

export default App
