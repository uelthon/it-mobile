import Card from '@/components/shared/ui/card'
import React from 'react'

interface Props {
  data: Array<{
    id: number
    title: string
    content: string
    img: string
  }>
  title?: string
}

const Solution = ({ data = [], title = '' }: Props) => {
  return (
    <section className='flex flex-col justify-start gap-5'>
      {title &&
        <div className='flex md:justify-center'>
          <h1 className='title max-w-[70%] text-4xl font-bold md:max-w-[40%] md:text-center'>{title}</h1>
        </div>}
      <div className='flex justify-center'>
        <div className='px-2 md:px-0 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {data.map(service =>
            <Card
              key={`solution-${title}-${service.id}`}
              content={service.content}
              image={service.img}
              title={service.title}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Solution
