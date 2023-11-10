import { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
  image: StaticImageData
  title: string
  content: string
  video?: {
    src: string
    width: number
    height: number
    pre: string
  }
}

const Card = ({ image, title = '', content = '', video }: Props) => {
  return (
    <div className='card card-compact w-full md:w-[23rem] bg-base-100 shadow-xl'>
      <figure>
        {!video && <img
          className='h-60 w-full object-contain'
          src={image.src}
          width={image.width}
          height={image.height}
          alt={title}
          loading='lazy'
                   />}
        {video &&
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            width={video.width}
            height={video.height}
            className='h-60 w-full object-contain'
            preload='none'
          >
            <source src={video.src} type='video/webm' />
          </video>}
      </figure>
      <div className='card-body'>
        <h2 className='card-title text-2xl font-bold text-it-blue-1'>{title}</h2>
        <p className='text-base leading-normal text-black'>{content}</p>
      </div>
    </div>
  )
}

export default Card
