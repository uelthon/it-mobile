import Contracts from '@/assets/images/solutions/Contracts.gif'
import Recruitment from '@/assets/images/solutions/Recruitment.gif'
import SprintManagement from '@/assets/images/solutions/Sprint  Management.gif'
import ITManagement from '@/assets/images/solutions/IT Management.gif'
import Telephony from '@/assets/images/solutions/Telephony.gif'
import Subscriptions from '@/assets/images/solutions/Subscriptions.gif'
import Emailhostingservices from '@/assets/images/solutions/Email hosting services.gif'
import Accountingsoftware from '@/assets/images/solutions/Accounting software.gif'
import Shifts from '@/assets/images/solutions/Shifts.gif'
import TicketingSystem from '@/assets/images/solutions/Ticketing System.gif'
import Salesautomation from '@/assets/images/solutions/Sales automation.gif'
import Helpdesk from '@/assets/images/solutions/Help desk.gif'
import Filemanagement from '@/assets/images/solutions/File management.gif'
import RemoteSupport from '@/assets/images/solutions/Remote Support.gif'
import StatusPage from '@/assets/images/solutions/Status Page.gif'
import Inventory from '@/assets/images/solutions/Inventory.gif'
import People from '@/assets/images/solutions/People.gif'
import Expense from '@/assets/images/solutions/Expense.gif'
import IdentityManagement from '@/assets/images/solutions/Identity Management.gif'
import Checkout from '@/assets/images/solutions/Check out.gif'
import BugManagement from '@/assets/images/solutions/Bug  Management.gif'
import TeamInbox from '@/assets/images/solutions/Team Inbox.gif'
import PasswordManager from '@/assets/images/solutions/Password Manager.gif'
import monitoring from '@/assets/images/solutions/247 monitoring.gif'
import MobileDeviceManagement from '@/assets/images/solutions/Mobile Device Management (MDM).gif'
import Marketingautomation from '@/assets/images/solutions/Marketing automation.gif'
import ProjectManagement from '@/assets/images/solutions/Project Management.gif'
import Calendar from '@/assets/images/solutions/Calendar.gif'
import FieldServiceManagement from '@/assets/images/solutions/Field Service  Management.gif'
import Hero from '@/assets/images/hero-section/hero-section.gif'
import { StaticImageData } from 'next/image'

interface Solutions {
  [k: string]: {
    [k: string]: {
      title: string
      data: Array<{
        id: number
        title: string
        content: string
        img: StaticImageData
      }>
    }
  }
}

export const solutions: Solutions = {
  en: {
    none: {
      title: 'Sales',
      data: [
        {
          id: 1,
          title: 'CRM',
          content: 'Customer Relationship Management (CRM) software to manage leads, opportunities, and customer interactions.',
          img: Hero
        },
        {
          id: 2,
          title: 'Sales automation',
          content: 'Sales automation tools to streamline sales processes, such as lead scoring and automated follow-ups.',
          img: Salesautomation
        },
        {
          id: 3,
          title: 'Marketing automation',
          content: 'Marketing automation platforms for email campaigns, lead nurturing, and analytics.Content management systems (CMS) to create and manage website content.',
          img: Marketingautomation
        }
      ]
    },
    services: {
      title: 'Service',
      data: [
        {
          id: 1,
          title: 'Help desk',
          content: 'Help desk software for efficient customer support ticket management.Customer self-service portals to empower customers to find answers to common queries.',
          img: Helpdesk
        },
        {
          id: 2,
          title: 'Field Service Management',
          content: 'field service management software that streamlines your field operations and elevates your customer service.',
          img: FieldServiceManagement
        },
        {
          id: 3,
          title: 'Remote Support',
          content: 'Remote support and remote access software to deliver top-notch customer support experiences. Establish secure, web-based, on-demand connections with remote PCs, laptops, mobile devices, and servers easily.',
          img: RemoteSupport
        }
      ]
    },
    finances: {
      title: 'Finance',
      data: [
        {
          id: 1,
          title: 'Accounting software',
          content: 'Accounting software for managing finances, invoicing, and expense tracking.Enterprise resource planning (ERP) systems to integrate financial data across the organization.',
          img: Accountingsoftware
        },
        {
          id: 2,
          title: 'Inventory',
          content: 'Powerful stock management and inventory control software.',
          img: Inventory
        },
        {
          id: 3,
          title: 'Subscriptions',
          content: 'Manage end-to-end Subscriptions life cycles.',
          img: Subscriptions
        },
        {
          id: 4,
          title: 'Check out',
          content: 'Custom, branded payment page in a matter of minutes and start accepting payments right away,',
          img: Checkout
        }
      ]
    },
    emails: {
      title: 'Email and Collaboration',
      data: [
        {
          id: 1,
          title: 'Email hosting services',
          content: 'Secure E-mail service for teams of all sizes.',
          img: Emailhostingservices
        },
        {
          id: 2,
          title: 'Telephony',
          content: 'Cloud based telephony for businesess',
          img: Telephony
        },
        {
          id: 3,
          title: 'Calendar',
          content: 'Online business calendar to manage events & schedule appointments',
          img: Calendar
        },
        {
          id: 4,
          title: 'Team Inbox',
          content: 'Shared Inboxes for Teams.',
          img: TeamInbox
        },
        {
          id: 5,
          title: 'File management',
          content: 'Online File Management.',
          img: Filemanagement
        }
      ]
    },
    resources: {
      title: 'Human Resources',
      data: [
        {
          id: 1,
          title: 'People',
          content: 'Organize, automate and simplify your human resources.',
          img: People
        },
        {
          id: 2,
          title: 'Shifts',
          content: 'Employee Scheduling and Time Tracking.',
          img: Shifts
        },
        {
          id: 3,
          title: 'Expense',
          content: 'Simply expense reporting.',
          img: Expense
        },
        {
          id: 4,
          title: 'Recruitment',
          content: 'Hiring solutions.',
          img: Recruitment
        }
      ]
    },
    legals: {
      title: 'Legal',
      data: [
        {
          id: 1,
          title: 'Contracts',
          content: 'Comprehensive contract management software.',
          img: Contracts
        }
      ]
    },
    securities: {
      title: 'Security & Management',
      data: [
        {
          id: 1,
          title: 'Password Manager',
          content: 'online security for team passwords.',
          img: PasswordManager
        },
        {
          id: 2,
          title: 'Mobile Device Management (MDM)',
          content: 'Set up and secure you Mobile devices and App.',
          img: MobileDeviceManagement
        },
        {
          id: 3,
          title: 'Ticketing System',
          content: 'Cloud based IT ticketing system to resolve faster',
          img: TicketingSystem
        },
        {
          id: 4,
          title: 'IT Management',
          content: 'Streamline IT and business service operations.',
          img: ITManagement
        },
        {
          id: 5,
          title: 'Identity Management',
          content: 'Secure single sign-on for your business.',
          img: IdentityManagement
        },
        {
          id: 6,
          title: 'Status Page',
          content: 'Real-time status and incident communication.',
          img: StatusPage
        },
        {
          id: 7,
          title: '24/7 monitoring',
          content: 'Monitoring solution for DevOps and IT operations.',
          img: monitoring
        }
      ]
    },
    projects: {
      title: 'Project Management',
      data: [
        {
          id: 1,
          title: 'Project Management',
          content: 'Manage, track and collaborate with your team.',
          img: ProjectManagement
        },
        {
          id: 2,
          title: 'Sprint Management',
          content: 'Plan & Track for Scrum teams.',
          img: SprintManagement
        },
        {
          id: 3,
          title: 'Bug Management',
          content: 'Automatic Bug Tracking technology.',
          img: BugManagement
        }
      ]
    }
  },
  es: {
    none: {
      title: 'Ventas',
      data: [
        {
          id: 1,
          title: 'CRM',
          content: 'Software de Gestión de Relaciones con el Cliente (CRM) para administrar clientes potenciales, oportunidades e interacciones con los clientes.',
          img: Hero
        },
        {
          id: 2,
          title: 'Sales automation',
          content: 'Sales automation tools to streamline sales processes, such as lead scoring and automated follow-ups.',
          img: Salesautomation
        },
        {
          id: 3,
          title: 'Marketing automation',
          content: 'Marketing automation platforms for email campaigns, lead nurturing, and analytics.Content management systems (CMS) to create and manage website content.',
          img: Marketingautomation
        }
      ]
    },
    services: {
      title: 'Servicios',
      data: [
        {
          id: 1,
          title: 'Servicio de asistencia',
          content: 'Software de servicio de asistencia para una gestión eficiente de tickets de soporte al cliente. Portales de autoservicio para empoderar a los clientes a encontrar respuestas a consultas comunes.',
          img: Helpdesk
        },
        {
          id: 2,
          title: 'Administración de Servicios de campo',
          content: 'Software de administración de servicios en campo que optimiza sus operaciones en terreno y mejora su servicio al cliente.',
          img: FieldServiceManagement
        },
        {
          id: 3,
          title: 'Soprote remoto',
          content: 'Software de soporte remoto y acceso remoto para ofrecer experiencias de soporte al cliente de alta calidad. Establezca conexiones seguras, basadas en la web, bajo demanda, con PCs remotos, portátiles, dispositivos móviles y servidores de forma sencilla',
          img: RemoteSupport
        }
      ]
    },
    finances: {
      title: 'Finanzas',
      data: [
        {
          id: 1,
          title: 'Software de contabilidad',
          content: 'Software de contabilidad para gestionar finanzas, facturación y seguimiento de gastos. Sistemas de planificación de recursos empresariales (ERP) para integrar datos financieros en toda la organización.',
          img: Accountingsoftware
        },
        {
          id: 2,
          title: 'Inventario',
          content: 'Potente software de gestión de inventario y control de existencias.',
          img: Inventory
        },
        {
          id: 3,
          title: 'Suscripciones',
          content: 'Gestione los ciclos de vida de las suscripciones de principio a fin.',
          img: Subscriptions
        },
        {
          id: 4,
          title: 'Check out',
          content: 'Crea una página de pago personalizada y con tu marca en cuestión de minutos y comienza a aceptar pagos de inmediato.',
          img: Checkout
        }
      ]
    },
    emails: {
      title: 'Correo electrónico y colaboración',
      data: [
        {
          id: 1,
          title: 'Servicios de alojamiento de correo electrónico',
          content: 'Servicio de correo electrónico seguro para equipos de todos los tamaños.',
          img: Emailhostingservices
        },
        {
          id: 2,
          title: 'Telefonía',
          content: 'Telefonía basada en la nube para empresas.',
          img: Telephony
        },
        {
          id: 3,
          title: 'Calendario',
          content: 'Calendario de negocios en línea para gestionar eventos y programar citas.',
          img: Calendar
        },
        {
          id: 4,
          title: 'Bandeja de entrada de equipo',
          content: 'Bandejas de entrada compartidas para equipos.',
          img: TeamInbox
        },
        {
          id: 5,
          title: 'Gestión de archivos',
          content: 'Gestión de archivos en línea.',
          img: Filemanagement
        }
      ]
    },
    resources: {
      title: 'Recursos Humanos',
      data: [
        {
          id: 1,
          title: 'Personas',
          content: 'Organiza, automatiza y simplifica tus recursos humanos.',
          img: People
        },
        {
          id: 2,
          title: 'Turnos',
          content: 'Programación de empleados y seguimiento del tiempo.',
          img: Shifts
        },
        {
          id: 3,
          title: 'Gastos',
          content: 'Informes de gastos simples.',
          img: Expense
        },
        {
          id: 4,
          title: 'Contratación',
          content: 'Soluciones de contratación.',
          img: Recruitment
        }
      ]
    },
    legals: {
      title: 'Derecho, Legal',
      data: [
        {
          id: 1,
          title: 'Contratos',
          content: 'Software de gestión de contratos integral.',
          img: Contracts
        }
      ]
    },
    securities: {
      title: 'Seguridad y Gestión',
      data: [
        {
          id: 1,
          title: 'Gestor de contraseñas',
          content: 'Seguridad en línea para contraseñas de equipos.',
          img: PasswordManager
        },
        {
          id: 2,
          title: 'Gestor de Dispositivos Móviles (MDM)',
          content: 'Configura y asegura tus dispositivos móviles y aplicaciones.',
          img: MobileDeviceManagement
        },
        {
          id: 3,
          title: 'Sistema de Tickets',
          content: 'Sistema de tickets de TI basado en la nube para resolver más rápido.',
          img: TicketingSystem
        },
        {
          id: 4,
          title: 'Gestión de TI',
          content: 'Optimiza las operaciones de servicios de TI y negocios.',
          img: ITManagement
        },
        {
          id: 5,
          title: 'Gestión de Identidad',
          content: 'Ingreso único seguro para tu negocio.',
          img: IdentityManagement
        },
        {
          id: 6,
          title: 'Página de Estado',
          content: 'Comunicación en tiempo real sobre el estado y los incidentes.',
          img: StatusPage
        },
        {
          id: 7,
          title: 'Monitoreo 24/7',
          content: 'Solución de monitoreo para operaciones de DevOps y TI.',
          img: monitoring
        }
      ]
    },
    projects: {
      title: 'Gestión de Proyectos',
      data: [
        {
          id: 1,
          title: 'Gestión de Proyectos',
          content: 'Gestiona, realiza un seguimiento y colabora con tu equipo.',
          img: ProjectManagement
        },
        {
          id: 2,
          title: 'Gestión de Sprints',
          content: 'Planifica y realiza un seguimiento para equipos de Scrum.',
          img: SprintManagement
        },
        {
          id: 3,
          title: 'Gestión de Errores',
          content: 'Tecnología de seguimiento automático de errores.',
          img: BugManagement
        }
      ]
    }
  }
}
