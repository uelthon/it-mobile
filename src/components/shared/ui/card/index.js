import React from 'react'

const Card = ({ image = '', title = '', content = '' }) => {
  return (
    <div className='card card-compact w-[20rem] bg-base-100 shadow-xl'>
      <figure><img className='h-60' src={image} alt={title} /></figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl text-it-blue-1'>{title}</h2>
        <p className='text-base'>{content}</p>
      </div>
    </div>
  )
}

export default Card
