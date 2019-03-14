import React from 'react'
import productData from '../data/product-data'

import ProductDetail from './ProductDetail'

class ProductList extends React.Component {
  state = { products: [] }

  sortVotes(products) {
    return products.sort((a, b) => {
      return b.votes - a.votes
    })
  }
  componentDidMount() {
    this.setState({ products: this.sortVotes(productData) })
  }

  handleProductVote = (id, direction) => {
    const products = this.state.products.map(product => {
      if (product.id === id) {
        let votes = product.votes

        if (direction === 'up') votes = votes + 1
        if (direction === 'down') votes = votes - 1

        return Object.assign({}, product, { votes })
      } else {
        return product
      }
    })
    this.setState({ products: this.sortVotes(products) })
  }

  renderProducts() {
    return this.state.products.map(product => (
      <ProductDetail
        key={ product.id }
        product={ product }
        onVote={this.handleProductVote} 
      />
    ))
  }
  
  render() {
    return (
      <div className='ui unstackable items'>
        { this.renderProducts() }
      </div>
    )
  }
}

export default ProductList