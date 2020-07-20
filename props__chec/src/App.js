import React from 'react';
import './App.css';
import ProductTable from './component/product_table';

function App (){
  const product=[{name:"LG",category:"pc", price:1500},{name:"Asus",category:"pc", price:2500},{name:"HP",category:"pc", price:2350}]
  return(
    <div>
      <ProductTable table={product}/>
    </div>
  )
}


export default App;


