import Industry from './industry'
import { industries } from '@/constants/home-tab-industries'

interface Props {
  locale: string
}

export default function Industries ({ locale }: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:max-w-[1210px]'>
      <Industry
        data={industries[locale].none.data}
        title={industries[locale].none.title}
      />
      <Industry
        data={industries[locale].consumers.data}
        title={industries[locale].consumers.title}
      />
      <Industry
        data={industries[locale].energy.data}
        title={industries[locale].energy.title}
      />
      <Industry
        data={industries[locale].manufacturing.data}
        title={industries[locale].manufacturing.title}
      />
      <Industry
        data={industries[locale].healthcare.data}
        title={industries[locale].healthcare.title}
      />
      <Industry
        data={industries[locale].retail.data}
        title={industries[locale].retail.title}
      />
      <Industry
        data={industries[locale].financial.data}
        title={industries[locale].financial.title}
      />
      <Industry
        data={industries[locale].media.data}
        title={industries[locale].media.title}
      />
    </div>
  )
}
