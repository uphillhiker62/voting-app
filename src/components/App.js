import React from 'react'
import ProductList from './ProductList'

const App = () => {
  return (
    <div className="main ui text container">
      <h1 className="ui dividing centered header">Popular Products</h1>
      <div id="content">
        <ProductList />
      </div>
    </div>
  )
}

export default App
