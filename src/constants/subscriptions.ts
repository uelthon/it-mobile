import { StaticImageData } from 'next/image'
import logosix from '@/assets/images/subscriptions/logo-6.webp'
import logofive from '@/assets/images/subscriptions/logo-5.webp'
import logoseven from '@/assets/images/subscriptions/logo-7.webp'
import logotwo from '@/assets/images/subscriptions/logo-2.webp'
import logothree from '@/assets/images/subscriptions/logo-3.webp'
import logofour from '@/assets/images/subscriptions/logo-4.webp'
import contactOne from '@/assets/images/contact/contact-1.png'
import contactTwo from '@/assets/images/contact/contact-2.png'
import contactThree from '@/assets/images/contact/contact-3.png'
import contactFour from '@/assets/images/contact/contact-4.png'
import contactFive from '@/assets/images/contact/contact-5.png'
import contactSix from '@/assets/images/contact/contact-6.png'

interface Subscriptions {
  en: {
    [k: string]: Subscription[]
  }
  es: {
    [k: string]: Subscription[]
  }
}
type Subscription = {
  tag: 'title'
  value: string
} | {
  tag: 'price'
  value: string
} | {
  tag: 'description'
  value: string
} | {
  tag: 'list'
  value: List
} | {
  tag: 'sub-title'
  value: string
} | {
  tag: 'assets'
  value: string[]
} | {
  tag: 'header'
  value: string
} | {
  tag: 'details-list'
  value: List
} | {
  tag: 'contact'
  value: Contact
} | {
  tag: 'link'
  value: Link
}

interface List {
  checkColor: string
  title?: string
  data: string[]
}

interface Contact {
  title: string
  image: StaticImageData
  desc: {
    content: string
    span: string
  }
  tel: {
    label: string
    href: string
  }
  time: string
}

interface Link {
  label: string
  href: string
  background: string
  color: string
}

export const subscriptions: Subscriptions = {
  en: {
    simple: [
      {
        tag: 'title',
        value: 'Simple'
      },
      {
        tag: 'price',
        value: '$49.00 per user/mo.'
      },
      {
        tag: 'description',
        value: 'Single-device plans are perfect for users with one device and include 50GB of storage. Device-only plans for kiosks, displays, and more do not include storage.'
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Network Management.',
            'Help Desk Support.',
            'Updates.',
            'Virus & Malware Removal.',
            'User Management.',
            'Remote Support.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contact Sales',
          desc: {
            content: 'Unlock Your Ultimate IT Experience',
            span: 'Reach Out to Our Experts Now!'
          },
          image: contactSix,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Here for You, Monday to Friday, 9am-5pm EST. Contact us today!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Sign up',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    essential: [
      {
        tag: 'title',
        value: 'Essential'
      },
      {
        tag: 'price',
        value: '$99.00 per user/mo.'
      },
      {
        tag: 'description',
        value: 'Single-device plans are perfect for users with one device and include 50GB of storage. Device-only plans for kiosks, displays, and more do not include storage.'
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Network Management.',
            'Help Desk Support.',
            'Updates.',
            'Virus & Malware Removal.',
            'User Management.',
            'Remote Support.'
          ]
        }
      },
      {
        tag: 'sub-title',
        value: 'Choose your Preferred Business Applications.'
      },
      {
        tag: 'assets',
        value: [logosix.src, logofive.src, logoseven.src]
      },
      {
        tag: 'contact',
        value: {
          title: 'Contact Sales',
          desc: {
            content: 'Unlock Your Ultimate IT Experience',
            span: 'Reach Out to Our Experts Now!'
          },
          image: contactFive,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Here for You, Monday to Friday, 9am-5pm EST. Contact us today!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Sign up',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    advanced: [
      {
        tag: 'title',
        value: 'Advanced'
      },
      {
        tag: 'price',
        value: '$149.00 per user/mo.'
      },
      {
        tag: 'description',
        value: 'Single-device plans are perfect for users with one device and include 50GB of storage. Device-only plans for kiosks, displays, and more do not include storage.'
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Essential Plan.',
            'On-site Hardware Support.',
            'Hardware Procurement.',
            'Change Management.',
            'Business Continuity.',
            'System Security.',
            'Backups Management.',
            'Systems Monitory.',
            'Identity Management.',
            'Mobile Device Management.',
            'Single Sign On.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contact Sales',
          desc: {
            content: 'Unlock Your Ultimate IT Experience',
            span: 'Reach Out to Our Experts Now!'
          },
          image: contactFour,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Here for You, Monday to Friday, 9am-5pm EST. Contact us today!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Sign up',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    one: [
      {
        tag: 'title',
        value: 'One'
      },
      {
        tag: 'price',
        value: '$249.00 per user/mo.'
      },
      {
        tag: 'description',
        value: 'Single-device plans are perfect for users with one device and include 50GB of storage. Device-only plans for kiosks, displays, and more do not include storage.'
      },
      {
        tag: 'assets',
        value: [logotwo.src]
      },
      {
        tag: 'header',
        value: 'Business Applications'
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Sales',
            'CRM',
            'Appointment Scheduling'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Marketing',
            'Social Media Marketing',
            'Marketing Automation',
            'Engagement'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Communication',
            'Email Hosting',
            'Chat'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Collaboration',
            'Project Management',
            'Web Conferencing',
            'File Management'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Productivity',
            'Spreadsheets',
            'Word Processor',
            'Digital Signatures'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Finance',
            'Accounting',
            'Invoice Management',
            'Expense Management',
            'Payment Forms',
            'Payroll'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Operations',
            'Subscription Management',
            'Inventory Management'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Human Resources',
            'Recruitment',
            'Inventory Management'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Business Process',
            'Business Intelligence'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Legal',
            'Contract Management'
          ]
        }
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: 'On-site Support',
          data: [
            'Hardware Procurement.',
            'Workspace Cleanups.',
            'Technical Fixes.',
            'Hardware Repairs.',
            'Remote Support.'
          ]
        }
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: 'Remote Support',
          data: [
            'User Onboarding.',
            'IT Asset Monitoring.',
            'Advanced Apps Support.',
            'Remote Access.',
            'Online Ticket.'
          ]
        }
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: 'Security',
          data: [
            'Single Sign On.',
            'Spam Phishing & Virus Filtering.',
            'Updates & Backups.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contact Sales',
          desc: {
            content: 'Unlock Your Ultimate IT Experience',
            span: 'Reach Out to Our Experts Now!'
          },
          image: contactThree,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Here for You, Monday to Friday, 9am-5pm EST. Contact us today!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Sign up',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    cloud_server: [
      {
        tag: 'title',
        value: 'Cloud Server'
      },
      {
        tag: 'price',
        value: '$149.00 per device/mo.'
      },
      {
        tag: 'description',
        value: 'Single-device plans are perfect for users with one device and include 50GB of storage. Device-only plans for kiosks, displays, and more do not include storage.'
      },
      {
        tag: 'sub-title',
        value: 'Choose your Preferred Business Applications.'
      },
      {
        tag: 'assets',
        value: [logothree.src]
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Tech Coverage.',
            'Patch Management.',
            'Server Monitoring.',
            'Unlimited Tickets.',
            'System Security.',
            'Backup & Recovery.',
            'Scalability Load Balancing.',
            'Disaster Recovery.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contact Sales',
          desc: {
            content: 'Unlock Your Ultimate IT Experience',
            span: 'Reach Out to Our Experts Now!'
          },
          image: contactTwo,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Here for You, Monday to Friday, 9am-5pm EST. Contact us today!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Sign up',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    network: [
      {
        tag: 'title',
        value: 'Network'
      },
      {
        tag: 'price',
        value: '$75.00 per device/mo.'
      },
      {
        tag: 'description',
        value: 'Single-device plans are perfect for users with one device and include 50GB of storage. Device-only plans for kiosks, displays, and more do not include storage.'
      },
      {
        tag: 'sub-title',
        value: 'Choose your Preferred Business Applications.'
      },
      {
        tag: 'assets',
        value: [logofour.src]
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Security.',
            'Monitoring.',
            'Configuration.',
            'Management.',
            'Troubleshooting.',
            'Performance.',
            'Upgrades.',
            'Remote Access.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contact Sales',
          desc: {
            content: 'Unlock Your Ultimate IT Experience',
            span: 'Reach Out to Our Experts Now!'
          },
          image: contactOne,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Here for You, Monday to Friday, 9am-5pm EST. Contact us today!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Sign up',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ]
  },
  es: {
    simple: [
      {
        tag: 'title',
        value: 'Sencillo'
      },
      {
        tag: 'price',
        value: '$49.00 por usuario/mes.'
      },
      {
        tag: 'description',
        value: 'Los planes para un solo dispositivo son ideales para usuarios con un dispositivo e incluyen 50 GB de almacenamiento. Solo para dispositivos, como quioscos, pantallas, y otros, no incluyen almacenamiento.'
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Gestión de Red.',
            'Soporte de Mesa de Ayuda.',
            'Actualizaciones.',
            'Eliminación de Virus y Malware.',
            'Gestión de Usuarios.',
            'Soporte Remoto.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contacta a Ventas',
          desc: {
            content: 'Desbloquea tu Experiencia TI Definitiva',
            span: '¡Contáctanos ahora para hablar con nuestros expertos!'
          },
          image: contactSix,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Estamos aquí para ti de lunes a viernes, de 9 am a 5 pm, hora estándar del este. ¡Contáctanos hoy mismo!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Registrarse',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    essential: [
      {
        tag: 'title',
        value: 'Esencial'
      },
      {
        tag: 'price',
        value: '$99.00 por usuario/mes.'
      },
      {
        tag: 'description',
        value: 'Los planes para un solo dispositivo son ideales para usuarios con un dispositivo y incluyen 50 GB de almacenamiento. Solo para dispositivos, como quioscos, pantallas y otros, no incluyen almacenamiento.'
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Gestión de Red.',
            'Soporte de Mesa de Ayuda.',
            'Actualizaciones.',
            'Eliminación de Virus y Malware.',
            'Gestión de Usuarios.',
            'Soporte Remoto.'
          ]
        }
      },
      {
        tag: 'sub-title',
        value: 'Elige tus Aplicaciones Empresariales Preferidas.'
      },
      {
        tag: 'assets',
        value: [logosix.src, logofive.src, logoseven.src]
      },
      {
        tag: 'contact',
        value: {
          title: 'Contacta a Ventas',
          desc: {
            content: 'Desbloquea tu Experiencia TI Definitiva',
            span: '¡Contáctanos ahora para hablar con nuestros expertos!'
          },
          image: contactFive,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Estamos aquí para ti de lunes a viernes, de 9 am a 5 pm, hora estándar del este. ¡Contáctanos hoy mismo!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Registrarse',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    advanced: [
      {
        tag: 'title',
        value: 'Avanzado'
      },
      {
        tag: 'price',
        value: '$149.00 por usuario/mes.'
      },
      {
        tag: 'description',
        value: 'Los planes para un solo dispositivo son ideales para usuarios con un dispositivo y incluyen 50 GB de almacenamiento. Solo para dispositivos, como quioscos, pantallas y otros, no incluyen almacenamiento.'
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Essential Plan.',
            'On-site Hardware Support.',
            'Hardware Procurement.',
            'Change Management.',
            'Business Continuity.',
            'System Security.',
            'Backups Management.',
            'Systems Monitory.',
            'Identity Management.',
            'Mobile Device Management.',
            'Single Sign On.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contacta a Ventas',
          desc: {
            content: 'Desbloquea tu Experiencia TI Definitiva',
            span: '¡Contáctanos ahora para hablar con nuestros expertos!'
          },
          image: contactFour,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Estamos aquí para ti de lunes a viernes, de 9 am a 5 pm, hora estándar del este. ¡Contáctanos hoy mismo!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Registrarse',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    one: [
      {
        tag: 'title',
        value: 'One'
      },
      {
        tag: 'price',
        value: '$249.00 por usuario/mes.'
      },
      {
        tag: 'description',
        value: 'Los planes para un solo dispositivo son ideales para usuarios con un dispositivo e incluyen 50 GB de almacenamiento. Solo para dispositivos, como quioscos, pantallas, y otros, no incluyen almacenamiento.'
      },
      {
        tag: 'assets',
        value: [logotwo.src]
      },
      {
        tag: 'header',
        value: 'Business Applications'
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Ventas',
            'CRM',
            'Programación de Citas'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Marketing',
            'Marketing en Redes Sociales',
            'Automatización del Marketing',
            'Compromiso (Engagement)'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Comunicación',
            'Alojamiento de Correo Electrónico',
            'Chat'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Colaboración',
            'Gestión de Proyectos',
            'Conferencias Web',
            'Gestión de Archivos'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Productividad',
            'Hojas de Cálculo',
            'Procesador de Texto',
            'Firmas Digitales'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Finanzas',
            'Contabilidad',
            'Gestión de Facturas',
            'Gestión de Gastos',
            'Formularios',
            'Pago Nómina'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Operaciones',
            'Gestión de Suscripciones',
            'Gestión de Inventario'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Recursos Humanos',
            'Contratación'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Procesos Empresariales',
            'Inteligencia Empresarial'
          ]
        }
      },
      {
        tag: 'details-list',
        value: {
          checkColor: 'text-it-yellow',
          data: [
            'Legal',
            'Gestión de Contratos'
          ]
        }
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: 'Soporte en el Sitio',
          data: [
            'Adquisición de Hardware.',
            'Limpieza de Espacios de Trabajo.',
            'Reparaciones Técnicas.',
            'Reparación de Hardware.',
            'Soporte Remoto.'
          ]
        }
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: 'Soporte Remoto',
          data: [
            'Integración de Usuarios.',
            'Monitoreo de Activos de TI.',
            'Soporte Avanzado de Apps.',
            'Acceso Remoto.',
            'Ticket en Línea.'
          ]
        }
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: 'Seguridad',
          data: [
            'Ingreso Único (Single Sign On).',
            'Filtrado de Spam, Phishing y Virus.',
            'Actualizaciones y Copias de Seguridad.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contacta a Ventas',
          desc: {
            content: 'Desbloquea tu Experiencia TI Definitiva',
            span: '¡Contáctanos ahora para hablar con nuestros expertos!'
          },
          image: contactThree,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Estamos aquí para ti de lunes a viernes, de 9 am a 5 pm, hora estándar del este. ¡Contáctanos hoy mismo!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Registrarse',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    cloud_server: [
      {
        tag: 'title',
        value: 'Servidor en la Nube'
      },
      {
        tag: 'price',
        value: '$149.00 por usuario/mes.'
      },
      {
        tag: 'description',
        value: 'Los planes para un solo dispositivo son ideales para usuarios con un dispositivo e incluyen 50 GB de almacenamiento. Solo para dispositivos, como quioscos, pantallas, y otros, no incluyen almacenamiento.'
      },
      {
        tag: 'sub-title',
        value: 'Elige tus Aplicaciones Empresariales Preferidas.'
      },
      {
        tag: 'assets',
        value: [logothree.src]
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Cobertura Técnica.',
            'Gestión de Parches.',
            'Monitoreo de Servidores.',
            'Tickets Ilimitados.',
            'Seguridad del Sistema.',
            'Copia de Seguridad y Recuperación.',
            'Escalabilidad y Equilibrio de Carga.',
            'Recuperación ante Desastres.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contacta a Ventas',
          desc: {
            content: 'Desbloquea tu Experiencia TI Definitiva',
            span: '¡Contáctanos ahora para hablar con nuestros expertos!'
          },
          image: contactTwo,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Estamos aquí para ti de lunes a viernes, de 9 am a 5 pm, hora estándar del este. ¡Contáctanos hoy mismo!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Registrarse',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ],
    network: [
      {
        tag: 'title',
        value: 'Red'
      },
      {
        tag: 'price',
        value: '$75.00 por usuario/mes.'
      },
      {
        tag: 'description',
        value: 'Los planes para un solo dispositivo son ideales para usuarios con un dispositivo e incluyen 50 GB de almacenamiento. Solo para dispositivos, como quioscos, pantallas, y otros, no incluyen almacenamiento.'
      },
      {
        tag: 'sub-title',
        value: 'Elige tus Aplicaciones Empresariales Preferidas.'
      },
      {
        tag: 'assets',
        value: [logofour.src]
      },
      {
        tag: 'list',
        value: {
          checkColor: 'text-it-blue-1',
          title: '',
          data: [
            'Seguridad.',
            'Monitoreo.',
            'Configuración.',
            'Gestión.',
            'Solución de Problemas.',
            'Rendimiento.',
            'Actualizaciones.',
            'Acceso Remoto.'
          ]
        }
      },
      {
        tag: 'contact',
        value: {
          title: 'Contacta a Ventas',
          desc: {
            content: 'Desbloquea tu Experiencia TI Definitiva',
            span: '¡Contáctanos ahora para hablar con nuestros expertos!'
          },
          image: contactOne,
          tel: {
            label: '305 204-2754',
            href: '13052042754'
          },
          time: 'Estamos aquí para ti de lunes a viernes, de 9 am a 5 pm, hora estándar del este. ¡Contáctanos hoy mismo!'
        }
      },
      {
        tag: 'link',
        value: {
          label: 'Registrarse',
          href: '/auth/sign-up',
          background: 'text-it-blue-1',
          color: 'text-white'
        }
      }
    ]
  }
}
