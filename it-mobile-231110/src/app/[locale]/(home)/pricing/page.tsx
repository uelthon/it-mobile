import React from 'react'
import { subscriptions } from '@/constants/subscriptions'
import Tags from '@/components/shared/icons/tags'
import Check from '@/components/shared/icons/check'
import { useTranslations } from 'next-intl'
import PricingCard from '@/components/app/home/pricing-card'

export default function Pricing () {
  const t = useTranslations('pricing')
  return (
    <div className='flex flex-col gap-8 justify-start pb-[6.25rem]'>
      <h1 className='w-full text-5xl md:text-7xl text-it-blue-1 font-extrabold px-2 text-left md:text-center'>
        {t('title')}
      </h1>
      <div className='flex flex-col justify-start gap-4 px-2 md:px-0 md:justify-center'>
        <p className='text-[2.375rem] text-it-blue-1 font-extrabold leading-[87%] md:text-center'>
          {t('sub-title.line-one')}<br /> <span className='text-it-black-1'>{t('sub-title.line-two')}</span>
        </p>
        <div className='flex justify-center'>
          <p className='text-2xl text-it-gray-2 md:text-center md:max-w-2xl'>
            {t('description')}
          </p>
        </div>
      </div>
      <section
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-0'
        style={{ gridTemplateRows: 'mansonry' }}
      >
        {Object.entries(subscriptions[t('locale') as 'en' | 'es']).map(([key, value]) => {
          return (
            <PricingCard key={key}>
              {value.map(node => {
                if (node.tag === 'title') {
                  return <h1 key={node.value} className='text-2xl font-extrabold text-it-black-1'>{node.value}</h1>
                }
                if (node.tag === 'price') {
                  return (
                    <div key={node.value} className='text-it-blue-1 font-extrabold text-2xl flex items-center gap-2'>
                      <Tags /> <p>{node.value}</p>
                    </div>
                  )
                }
                if (node.tag === 'description') {
                  return <p key={node.value} className='text-xl text-it-gray-2 leading-normal font-light mb-8'>{node.value}</p>
                }
                if (node.tag === 'list') {
                  return (
                    <ul key={JSON.stringify(node.value)}>
                      {node.value.title && <li className='title text-base font-bold mb-2 px-3 py-2 w-1/2'>{node.value.title}</li>}
                      {node.value.data.map(v =>
                        <li key={v} className={`flex items-center gap-2 ${node.value.title ? 'ml-2' : ''}`}>
                          <span
                            className={node.value.checkColor}
                          >
                            <Check />
                          </span>
                          <p
                            className='text-[1.375rem] font-extrabold'
                          >
                            {v}
                          </p>
                        </li>
                      )}
                    </ul>
                  )
                }
                if (node.tag === 'sub-title') {
                  return (
                    <p className='text-xl font-medium text-it-blue-1' key={node.value}>
                      {node.value}
                    </p>
                  )
                }
                if (node.tag === 'assets') {
                  return (
                    <div
                      key={JSON.stringify(node.value)}
                      className='w-full flex flex-col justify-start items-center'
                    >
                      {node.value.map(asset =>
                        <img key={asset} src={asset} />
                      )}
                    </div>
                  )
                }
                return null
              })}
            </PricingCard>
          )
        })}
      </section>
    </div>
  )
}
