import React from 'react'

const Industry = ({ data = [], title = '' }) => {
  return (
    <section className='flex flex-col justify-start gap-5'>
      {title && <h1 className='title max-w-[70%] text-4xl font-bold md:max-w-full md:text-center'>{title}</h1>}
      <div className='px-2 md:px-0 flex gap-4 justify-center flex-wrap'>
        {data.map(industry =>
          <button
            key={`industry-${title}-industry`}
            className='btn-it'
          >
            {industry.icon}
            <span>
              {industry.label}
            </span>
          </button>
        )}
      </div>
    </section>
  )
}

export default Industry
