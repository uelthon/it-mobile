import logosix from '@/assets/images/subscriptions/logo-6.webp'
import logofive from '@/assets/images/subscriptions/logo-5.webp'
import logoseven from '@/assets/images/subscriptions/logo-7.webp'
import logotwo from '@/assets/images/subscriptions/logo-2.webp'
import logothree from '@/assets/images/subscriptions/logo-3.webp'
import logofour from '@/assets/images/subscriptions/logo-4.webp'

export const subscriptions = {
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
}
