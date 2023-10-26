import Card from '@/components/shared/ui/card'
import React from 'react'

const Solution = ({ data = [], title = '' }) => {
  return (
    <section className='flex flex-col justify-start gap-5'>
      {title && <h1 className='title max-w-[70%] text-4xl font-bold md:max-w-[40%] md:text-center'>{title}</h1>}
      <div className='px-2 md:px-0 flex gap-4 justify-center flex-wrap'>
        {data.map(service =>
          <Card
            key={`solution-${title}-${service.id}`}
            content={service.content}
            image={service.img}
            title={service.title}
          />
        )}
      </div>
    </section>
  )
}

export default Solution
