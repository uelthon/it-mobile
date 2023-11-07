import logosix from '@/assets/images/subscriptions/logo-6.webp'
import logofive from '@/assets/images/subscriptions/logo-5.webp'
import logoseven from '@/assets/images/subscriptions/logo-7.webp'
import logotwo from '@/assets/images/subscriptions/logo-2.webp'
import logothree from '@/assets/images/subscriptions/logo-3.webp'
import logofour from '@/assets/images/subscriptions/logo-4.webp'

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
}

interface List {
  checkColor: string
  title?: string
  data: string[]
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
      }
    ]
  }
}
