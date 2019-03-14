import React from 'react'

const Voting = props => {
  return (
    <div className='header'>
      <a href onClick={ () => props.onVote(props.id, 'up') }>
        <i className='large caret up icon' />
      </a>
      { props.votes }
      <a href onClick={ () => props.onVote(props.id, 'down') }>
        <i className='large caret down icon' />
      </a>
    </div>
  )
}

export default Voting