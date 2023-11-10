import React from 'react'

interface Props {
  data: Array<{
    id: number
    label: string
    icon: React.ReactNode
    href: string
  }>
  title?: string
}

const Industry = ({ data = [], title = '' }: Props) => {
  return (
    <section className='flex flex-col justify-start gap-5'>
      {title &&
        <div className='w-full flex justify-start md:justify-center'>
          <h1 className='title max-w-[70%] text-4xl font-bold md:max-w-[30rem] md:min-w-[13.5rem] md:text-center'>{title}</h1>
        </div>}
      <div className='px-2 md:px-0 flex gap-4 justify-center flex-wrap'>
        {data.map(industry =>
          <button
            key={`industry-${title}-${industry.label}`}
            className='btn-it h-[4.5rem] justify-center text-2xl font-medium w-full md:w-[30rem]'
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
