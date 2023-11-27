import Activity from '@/components/shared/icons/activity'
import Apps from '@/components/shared/icons/apps'
import CardUser from '@/components/shared/icons/card-user'
import Devices from '@/components/shared/icons/devices'
import Locations from '@/components/shared/icons/locations'
import Logout from '@/components/shared/icons/logout'
import Rocket from '@/components/shared/icons/rocket'
import Settings from '@/components/shared/icons/settings'
import Subscriptions from '@/components/shared/icons/subscriptions'
import User from '@/components/shared/icons/user'
import Users from '@/components/shared/icons/users'

interface CustomerAdminSidebar {
  [k: string]: SidebarItem[]
}

interface SidebarItem {
  label: string
  href: string
  icon: JSX.Element
  paths: string[]
  type: 'link' | 'action'
}

export const customerAdminSidebar: CustomerAdminSidebar = {
  1: [
    {
      label: 'Get Started',
      href: '/dashboard/customer-admin/get-started',
      icon: <Rocket />,
      paths: ['/dashboard/customer-admin/get-started'],
      type: 'link'
    },
    {
      label: 'Subscription',
      href: '/dashboard/customer-admin/subscriptions',
      icon: <Subscriptions />,
      paths: ['/dashboard/customer-admin/subscriptions'],
      type: 'link'
    },
    {
      label: 'Activity',
      href: '/dashboard/customer-admin/activity',
      icon: <Activity />,
      paths: ['/dashboard/customer-admin/activity'],
      type: 'link'
    },
    {
      label: 'Locations',
      href: '/dashboard/customer-admin/locations',
      icon: <Locations />,
      paths: ['/dashboard/customer-admin/locations'],
      type: 'link'
    }
  ],
  2: [
    {
      label: 'Users',
      href: '/dashboard/customer-admin/users',
      icon: <User />,
      paths: ['/dashboard/customer-admin/users'],
      type: 'link'
    },
    {
      label: 'User Groups',
      href: '/dashboard/customer-admin/user-groups',
      icon: <Users />,
      paths: ['/dashboard/customer-admin/user-groups'],
      type: 'link'
    },
    {
      label: 'Access Management',
      href: '/dashboard/customer-admin/access-management',
      icon: <CardUser />,
      paths: ['/dashboard/customer-admin/access-management'],
      type: 'link'
    }
  ],
  3: [
    {
      label: 'Devices',
      href: '/dashboard/customer-admin/devices',
      icon: <Devices />,
      paths: ['/dashboard/customer-admin/devices'],
      type: 'link'
    }
  ],
  4: [
    {
      label: 'Settings',
      href: '/dashboard/customer-admin/settings',
      icon: <Settings />,
      paths: ['/dashboard/customer-admin/settings'],
      type: 'link'
    },
    {
      label: 'Apps',
      href: '/dashboard/customer-admin/apps',
      icon: <Apps />,
      paths: ['/dashboard/customer-admin/apps'],
      type: 'link'
    },
    {
      label: 'Log out',
      href: '',
      icon: <Logout />,
      paths: [''],
      type: 'action'
    }
  ]
}
