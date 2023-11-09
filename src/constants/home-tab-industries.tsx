import { Bank } from '@/components/shared/icons/bank'
import Car from '@/components/shared/icons/car'
import CarLocation from '@/components/shared/icons/car-location'
import Childrens from '@/components/shared/icons/childrens'
import Factory from '@/components/shared/icons/factory'
import FactoryTwo from '@/components/shared/icons/factory-two'
import Fashion from '@/components/shared/icons/fashion'
import Gas from '@/components/shared/icons/gas'
import Heart from '@/components/shared/icons/heart'
import Home from '@/components/shared/icons/home'
import Hospital from '@/components/shared/icons/hospital'
import Insurance from '@/components/shared/icons/insurance'
import MedTech from '@/components/shared/icons/med-tech'
import Milk from '@/components/shared/icons/milk'
import Newspaper from '@/components/shared/icons/newspaper'
import OnlineAd from '@/components/shared/icons/online-ad'
import Pharma from '@/components/shared/icons/pharma'
import Pig from '@/components/shared/icons/pig'
import Providers from '@/components/shared/icons/providers'
import Radio from '@/components/shared/icons/radio'
import School from '@/components/shared/icons/school'
import Shirt from '@/components/shared/icons/shirt'
import Shop from '@/components/shared/icons/shop'
import SocialMedia from '@/components/shared/icons/social-media'
import { SolarPanel } from '@/components/shared/icons/solar-panel'
import Teacher from '@/components/shared/icons/teacher'
import Television from '@/components/shared/icons/television'

interface Industries {
  [k: string]: {
    [k: string]: {
      title: string
      data: Array<{
        id: number
        label: string
        icon: React.ReactNode
        href: string
      }>
    }
  }
}

export const industries: Industries = {
  en: {
    none: {
      title: 'Automotive',
      data: [
        {
          id: 1,
          label: 'Retailers',
          icon: <Car />,
          href: ''
        },
        {
          id: 2,
          label: 'Suppliers',
          icon: <Factory />,
          href: ''
        },
        {
          id: 3,
          label: 'Mobility Services',
          icon: <CarLocation />,
          href: ''
        }
      ]
    },
    consumers: {
      title: 'Consumer Goods',
      data: [
        {
          id: 1,
          label: 'Apparel, Footwear, and Accessories',
          icon: <Shirt />,
          href: ''
        },
        {
          id: 2,
          label: 'Health and Beauty',
          icon: <Heart />,
          href: ''
        },
        {
          id: 3,
          label: 'Fast-Moving Consumer Goods',
          icon: <Milk />,
          href: ''
        }
      ]
    },
    educations: {
      title: 'Education',
      data: [
        {
          id: 1,
          label: 'Comprehensive Schools',
          icon: <Home />,
          href: ''
        },
        {
          id: 2,
          label: 'High school',
          icon: <School />,
          href: ''
        },
        {
          id: 3,
          label: 'Enrichment Centers',
          icon: <Childrens />,
          href: ''
        },
        {
          id: 4,
          label: 'Skill centers',
          icon: <Teacher />,
          href: ''
        }
      ]
    },
    energy: {
      title: 'Energy & Utilities',
      data: [
        {
          id: 1,
          label: 'Power & Utilities',
          icon: <SolarPanel />,
          href: ''
        },
        {
          id: 2,
          label: 'Oil & Gas',
          icon: <Gas />,
          href: ''
        }
      ]
    },
    financial: {
      title: 'Financial Services',
      data: [
        {
          id: 1,
          label: 'Banking',
          icon: <Bank />,
          href: ''
        },
        {
          id: 2,
          label: 'Insurance',
          icon: <Insurance />,
          href: ''
        },
        {
          id: 3,
          label: 'Wealth & Asset Management',
          icon: <Pig />,
          href: ''
        }
      ]
    },
    healthcare: {
      title: 'Healthcare & Life Sciences',
      data: [
        {
          id: 1,
          label: 'Providers',
          icon: <Providers />,
          href: ''
        },
        {
          id: 2,
          label: 'Payers',
          icon: <Insurance />,
          href: ''
        },
        {
          id: 3,
          label: 'Pharma',
          icon: <Pharma />,
          href: ''
        },
        {
          id: 4,
          label: 'MedTech',
          icon: <MedTech />,
          href: ''
        },
        {
          id: 5,
          label: 'Hospitals',
          icon: <Hospital />,
          href: ''
        }
      ]
    },
    manufacturing: {
      title: 'Manufacturing',
      data: [
        {
          id: 1,
          label: 'Factory',
          icon: <FactoryTwo />,
          href: ''
        },
        {
          id: 2,
          label: 'Shops',
          icon: <Shop />,
          href: ''
        }
      ]
    },
    retail: {
      title: 'Retail',
      data: [
        {
          id: 1,
          label: 'Fashion',
          icon: <Fashion />,
          href: ''
        },
        {
          id: 2,
          label: 'Newspaper',
          icon: <Newspaper />,
          href: ''
        },
        {
          id: 3,
          label: 'Social Media',
          icon: <SocialMedia />,
          href: ''
        },
        {
          id: 4,
          label: 'Radio',
          icon: <Radio />,
          href: ''
        },
        {
          id: 5,
          label: 'Online Advertising',
          icon: <OnlineAd />,
          href: ''
        }
      ]
    },
    media: {
      title: 'Media',
      data: [
        {
          id: 1,
          label: 'Television',
          icon: <Television />,
          href: ''
        },
        {
          id: 2,
          label: 'Newspaper',
          icon: <Newspaper />,
          href: ''
        },
        {
          id: 3,
          label: 'Social Media',
          icon: <SocialMedia />,
          href: ''
        },
        {
          id: 4,
          label: 'Radio',
          icon: <Radio />,
          href: ''
        },
        {
          id: 5,
          label: 'Online Advertising',
          icon: <OnlineAd />,
          href: ''
        }
      ]
    }
  },
  es: {
    none: {
      title: 'Automotor',
      data: [
        {
          id: 1,
          label: 'Minoristas',
          icon: <Car />,
          href: ''
        },
        {
          id: 2,
          label: 'Proveedores',
          icon: <Factory />,
          href: ''
        },
        {
          id: 3,
          label: 'Servicios de Movilidad',
          icon: <CarLocation />,
          href: ''
        }
      ]
    },
    consumers: {
      title: 'Bienes de consumo',
      data: [
        {
          id: 1,
          label: 'Ropa, Calzado y Accesorios',
          icon: <Shirt />,
          href: ''
        },
        {
          id: 2,
          label: 'Belleza y Salud',
          icon: <Heart />,
          href: ''
        },
        {
          id: 3,
          label: 'Bienes de consumo de rápido movimiento',
          icon: <Milk />,
          href: ''
        }
      ]
    },
    educations: {
      title: 'Educación',
      data: [
        {
          id: 1,
          label: 'Escuelas integrales',
          icon: <Home />,
          href: ''
        },
        {
          id: 2,
          label: 'Escuela secundaria',
          icon: <School />,
          href: ''
        },
        {
          id: 3,
          label: 'Centros de enriquecimiento',
          icon: <Childrens />,
          href: ''
        },
        {
          id: 4,
          label: 'Centro de habilidades',
          icon: <Teacher />,
          href: ''
        }
      ]
    },
    energy: {
      title: 'Energía y servicios públicos',
      data: [
        {
          id: 1,
          label: 'Energía y servicios públicos',
          icon: <SolarPanel />,
          href: ''
        },
        {
          id: 2,
          label: 'Petróleo y Gas',
          icon: <Gas />,
          href: ''
        }
      ]
    },
    financial: {
      title: 'Servicios Financieros',
      data: [
        {
          id: 1,
          label: 'Banca',
          icon: <Bank />,
          href: ''
        },
        {
          id: 2,
          label: 'Seguros',
          icon: <Insurance />,
          href: ''
        },
        {
          id: 3,
          label: 'Gestión de patrimonio y activos',
          icon: <Pig />,
          href: ''
        }
      ]
    },
    healthcare: {
      title: 'Atención médica y ciencias de la vida',
      data: [
        {
          id: 1,
          label: 'Proveedores',
          icon: <Providers />,
          href: ''
        },
        {
          id: 2,
          label: 'Pagadores',
          icon: <Insurance />,
          href: ''
        },
        {
          id: 3,
          label: 'Farmacéutica',
          icon: <Pharma />,
          href: ''
        },
        {
          id: 4,
          label: 'Tecnología médica',
          icon: <MedTech />,
          href: ''
        },
        {
          id: 5,
          label: 'Hospitales',
          icon: <Hospital />,
          href: ''
        }
      ]
    },
    manufacturing: {
      title: 'Manufactura',
      data: [
        {
          id: 1,
          label: 'Fábricas',
          icon: <FactoryTwo />,
          href: ''
        },
        {
          id: 2,
          label: 'Tiendas',
          icon: <Shop />,
          href: ''
        }
      ]
    },
    retail: {
      title: 'Retail',
      data: [
        {
          id: 1,
          label: 'Fashion',
          icon: <Fashion />,
          href: ''
        },
        {
          id: 2,
          label: 'Periódico',
          icon: <Newspaper />,
          href: ''
        },
        {
          id: 3,
          label: 'Redes Sociales',
          icon: <SocialMedia />,
          href: ''
        },
        {
          id: 4,
          label: 'Radio',
          icon: <Radio />,
          href: ''
        },
        {
          id: 5,
          label: 'Publicidad en línea',
          icon: <OnlineAd />,
          href: ''
        }
      ]
    },
    media: {
      title: 'Media',
      data: [
        {
          id: 1,
          label: 'Television',
          icon: <Television />,
          href: ''
        },
        {
          id: 2,
          label: 'Periódico',
          icon: <Newspaper />,
          href: ''
        },
        {
          id: 3,
          label: 'Redes Sociales',
          icon: <SocialMedia />,
          href: ''
        },
        {
          id: 4,
          label: 'Radio',
          icon: <Radio />,
          href: ''
        },
        {
          id: 5,
          label: 'Publicidad en línea',
          icon: <OnlineAd />,
          href: ''
        }
      ]
    }
  }
}
