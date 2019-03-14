import React from 'react'

import Voting from './Voting'

class ProductDetail extends React.Component {
  render() {
    const { 
      id,
      productImageUrl,
      votes,
      url,
      title,
      description,
      submitterAvatarUrl } = this.props.product

    return (
      <div className='item'>
        <div className='image'>
          <img alt="product" src={ productImageUrl } />
        </div>
        <div className='middle aligned content'>
          <Voting id={ id } votes={ votes } onVote={this.props.onVote} />
          <div className='description'>
            <a href={ url }>
              { title }
            </a>
            <p>
              { description }
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              alt="avatar"
              src={ submitterAvatarUrl }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetail