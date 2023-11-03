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

export const tabConstrols = [
  {
    id: 1,
    label: 'Services',
    value: '/services'
  },
  {
    id: 2,
    label: 'Solutions',
    value: '/solutions'
  },
  {
    id: 3,
    label: 'Industries',
    value: '/industries'
  }
]

export const services = [
  {
    id: 1,
    title: 'Managed IT',
    content: 'Outsourcing IT services to a managed service provider (MSP) allows companies to have access to a team of experts who can manage their IT infrastructure, networks, and security on a proactive basis.',
    img: ''
  },
  {
    id: 2,
    title: 'Cloud Computing',
    content: 'Cloud services offer scalable and cost-effective solutions for data storage, application hosting, and software deployment. Cloud computing allows companies to access resources and applications over the internet, reducing the need for on-premises infrastructure.',
    img: ''
  },
  {
    id: 3,
    title: 'AI Integration',
    content: 'As AI becomes increasingly prevalent in various industries, Ask Claudi can assist in integrating AI technologies into the business processes. AI-powered solutions can automate tasks, optimize operations, and gain valuable insights from data.',
    img: ''
  },
  {
    id: 4,
    title: 'Data Backup and Recovery',
    content: 'Regular data backups and a reliable recovery system are essential to safeguard against data loss due to hardware failures, cyberattacks, or accidental deletions.',
    img: ''
  },
  {
    id: 5,
    title: 'Mobile Device Management (MDM)',
    content: 'As more employees use mobile devices for work, MDM services help companies manage and secure these devices, ensuring data privacy and compliance.',
    img: ''
  },
  {
    id: 6,
    title: 'Unified Communications',
    content: 'Integrated communication solutions that include voice, video conferencing, instant messaging, and collaboration tools help improve internal and external communication within the organization.',
    img: ''
  },
  {
    id: 7,
    title: 'IT Training and Support',
    content: 'Providing IT training for employees and offering ongoing technical support helps enhance productivity and ensures smooth operations.',
    img: ''
  },
  {
    id: 8,
    title: 'Internet of Things (IoT)',
    content: 'IoT services enable companies to connect and manage smart devices, creating new opportunities for automation and data collection.',
    img: ''
  },
  {
    id: 9,
    title: 'Artificial Intelligence and Machine Learning',
    content: 'IoT services enable companies to connect and manage smart devices, creating new opportunities for automation and data collection.',
    img: ''
  },
  {
    id: 10,
    title: 'Cybersecurity',
    content: 'Robust cybersecurity measures are critical to protect a company\'s sensitive data and systems from cyber threats. This includes firewalls, antivirus',
    img: ''
  }
]

interface Solutions {
  [k: string]: Array<{
    id: number
    title: string
    content: string
    img: string
  }>
}

export const solutions: Solutions = {
  none: [
    {
      id: 1,
      title: 'CRM',
      content: 'Customer Relationship Management (CRM) software to manage leads, opportunities, and customer interactions.',
      img: ''
    },
    {
      id: 2,
      title: 'Sales automation',
      content: 'Sales automation tools to streamline sales processes, such as lead scoring and automated follow-ups.',
      img: ''
    },
    {
      id: 3,
      title: 'Marketing automation',
      content: 'Marketing automation platforms for email campaigns, lead nurturing, and analytics.Content management systems (CMS) to create and manage website content.',
      img: ''
    }
  ],
  services: [
    {
      id: 1,
      title: 'Help desk',
      content: 'Help desk software for efficient customer support ticket management.Customer self-service portals to empower customers to find answers to common queries.',
      img: ''
    },
    {
      id: 2,
      title: 'Field Service Management',
      content: 'field service management software that streamlines your field operations and elevates your customer service.',
      img: ''
    },
    {
      id: 3,
      title: 'Remote Support',
      content: 'Remote support and remote access software to deliver top-notch customer support experiences. Establish secure, web-based, on-demand connections with remote PCs, laptops, mobile devices, and servers easily.',
      img: ''
    }
  ],
  finances: [
    {
      id: 1,
      title: 'Accounting software',
      content: 'Accounting software for managing finances, invoicing, and expense tracking.Enterprise resource planning (ERP) systems to integrate financial data across the organization.',
      img: ''
    },
    {
      id: 2,
      title: 'Inventory',
      content: 'Powerful stock management and inventory control software.',
      img: ''
    },
    {
      id: 3,
      title: 'Subscriptions',
      content: 'Manage end-to-end Subscriptions life cycles.',
      img: ''
    },
    {
      id: 4,
      title: 'Check out',
      content: 'Custom, branded payment page in a matter of minutes and start accepting payments right away,',
      img: ''
    }
  ],
  emails: [
    {
      id: 1,
      title: 'Email hosting services',
      content: 'Secure E-mail service for teams of all sizes.',
      img: ''
    },
    {
      id: 2,
      title: 'Telephony',
      content: 'Cloud based telephony for businesess',
      img: ''
    },
    {
      id: 3,
      title: 'Calendar',
      content: 'Online business calendar to manage events & schedule appointments',
      img: ''
    },
    {
      id: 4,
      title: 'Team Inbox',
      content: 'Shared Inboxes for Teams.',
      img: ''
    },
    {
      id: 5,
      title: 'File management',
      content: 'Online File Management.',
      img: ''
    }
  ],
  resources: [
    {
      id: 1,
      title: 'People',
      content: 'Organize, automate and simplify your human resources.',
      img: ''
    },
    {
      id: 2,
      title: 'Shifts',
      content: 'Employee Scheduling and Time Tracking.',
      img: ''
    },
    {
      id: 3,
      title: 'Expense',
      content: 'Simply expense reporting.',
      img: ''
    },
    {
      id: 4,
      title: 'Recruitment',
      content: 'Hiring solutions.',
      img: ''
    }
  ],
  legals: [
    {
      id: 1,
      title: 'Contracts',
      content: 'Comprehensive contract management software.',
      img: ''
    }
  ],
  securities: [
    {
      id: 1,
      title: 'Password Manager',
      content: 'online security for team passwords.',
      img: ''
    },
    {
      id: 2,
      title: 'Mobile Device Management (MDM)',
      content: 'Set up and secure you Mobile devices and App.',
      img: ''
    },
    {
      id: 3,
      title: 'Ticketing System',
      content: 'Cloud based IT ticketing system to resolve faster',
      img: ''
    },
    {
      id: 4,
      title: 'IT Management',
      content: 'Streamline IT and business service operations.',
      img: ''
    },
    {
      id: 5,
      title: 'Identity Management',
      content: 'Secure single sign-on for your business.',
      img: ''
    },
    {
      id: 6,
      title: 'Status Page',
      content: 'Real-time status and incident communication.',
      img: ''
    },
    {
      id: 7,
      title: '24/7 monitoring',
      content: 'Monitoring solution for DevOps and IT operations.',
      img: ''
    }
  ],
  projects: [
    {
      id: 1,
      title: 'Project Management',
      content: 'Manage, track and collaborate with your team.',
      img: ''
    },
    {
      id: 2,
      title: 'Sprint Management',
      content: 'Plan & Track for Scrum teams.',
      img: ''
    },
    {
      id: 3,
      title: 'Bug Management',
      content: 'Automatic Bug Tracking technology.',
      img: ''
    }
  ]
}

interface Industries {
  [k: string]: Array<{
    id: number
    label: string
    icon: React.ReactNode
    href: string
  }>
}

export const industries: Industries = {
  none: [
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
  ],
  consumers: [
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
  ],
  educations: [
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
  ],
  energy: [
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
  ],
  financial: [
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
  ],
  healthcare: [
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
  ],
  manufacturing: [
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
  ],
  retail: [
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
  ],
  media: [
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
