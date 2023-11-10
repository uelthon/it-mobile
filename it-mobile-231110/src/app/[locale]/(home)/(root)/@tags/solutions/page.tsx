import React from 'react'
import Solution from './solution'
import { solutions } from '@/constants/home-tab-solutions'
import { useTranslations } from 'next-intl'

export default function Solutions () {
  const t = useTranslations('home')
  return (
    <section className='flex flex-col justify-start gap-8'>
      <Solution
        data={solutions[t('locale')].none.data}
        title={solutions[t('locale')].none.title}
      />
      <Solution
        data={solutions[t('locale')].services.data}
        title={solutions[t('locale')].services.title}
      />
      <Solution
        data={solutions[t('locale')].finances.data}
        title={solutions[t('locale')].finances.title}
      />
      <Solution
        data={solutions[t('locale')].emails.data}
        title={solutions[t('locale')].emails.title}
      />
      <Solution
        data={solutions[t('locale')].resources.data}
        title={solutions[t('locale')].resources.title}
      />
      <Solution
        data={solutions[t('locale')].legals.data}
        title={solutions[t('locale')].legals.title}
      />
      <Solution
        data={solutions[t('locale')].securities.data}
        title={solutions[t('locale')].securities.title}
      />
      <Solution
        data={solutions[t('locale')].projects.data}
        title={solutions[t('locale')].projects.title}
      />
    </section>
  )
}
