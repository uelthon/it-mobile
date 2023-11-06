import React from 'react'
import Industry from './industry'
import { industries } from '@/constants/home-tab-industries'
import { useTranslations } from 'next-intl'

export default function Industires () {
  const t = useTranslations('home')
  return (
    <section className='w-full flex flex-col items-center gap-8'>
      <div>
        <Industry
          data={industries[t('locale')].none.data}
        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <Industry
          data={industries[t('locale')].consumers.data}
          title={industries[t('locale')].consumers.title}
        />
        <Industry
          data={industries[t('locale')].educations.data}
          title={industries[t('locale')].educations.title}
        />
        <Industry
          data={industries[t('locale')].energy.data}
          title={industries[t('locale')].energy.title}
        />
        <Industry
          data={industries[t('locale')].financial.data}
          title={industries[t('locale')].financial.title}
        />
        <Industry
          data={industries[t('locale')].healthcare.data}
          title={industries[t('locale')].healthcare.title}
        />
        <Industry
          data={industries[t('locale')].manufacturing.data}
          title={industries[t('locale')].manufacturing.title}
        />
        <Industry
          data={industries[t('locale')].retail.data}
          title={industries[t('locale')].retail.title}
        />
        <Industry
          data={industries[t('locale')].media.data}
          title={industries[t('locale')].media.title}
        />
      </div>
    </section>
  )
}
