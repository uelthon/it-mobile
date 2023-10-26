import React from 'react'
import Solution from './solution'
import { solutions } from '@/constants/home-tab-control'

export default function Solutions () {
  return (
    <section className='flex flex-col justify-start gap-8'>
      <Solution
        data={solutions.none}
      />
      <Solution
        data={solutions.services}
        title='Service'
      />
      <Solution
        data={solutions.finances}
        title='Finance'
      />
      <Solution
        data={solutions.emails}
        title='Email and Collaboration'
      />
      <Solution
        data={solutions.resources}
        title='Human Resources'
      />
      <Solution
        data={solutions.legals}
        title='Legal'
      />
      <Solution
        data={solutions.securities}
        title='Security & Management'
      />
      <Solution
        data={solutions.projects}
        title='Project Management'
      />
    </section>
  )
}
