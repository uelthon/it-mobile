import { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  image: StaticImageData
  title: string
  content: string
}

const Card = ({ image, title = '', content = '' }: Props) => {
  return (
    <div className='card card-compact w-full md:w-[23rem] bg-base-100 shadow-xl'>
      <figure>
        <img
          className='h-60 w-full object-contain'
          src={image.src}
          width={image.width}
          height={image.height}
          alt={title}
          loading='lazy'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl text-it-blue-1'>{title}</h2>
        <p className='text-base'>{content}</p>
      </div>
    </div>
  )
}

export default Card
