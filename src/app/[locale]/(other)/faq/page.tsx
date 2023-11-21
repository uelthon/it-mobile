import Dropdown from '@/components/shared/ui/dropdown'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function FAQ () {
  const t = useTranslations('faq')
  return (
    <div className='flex flex-col gap-4 justify-start pb-[6.25rem]'>
      <h1 className='w-[60%] md:w-full text-5xl md:text-7xl text-it-blue-1 font-extrabold px-2 text-left md:text-center'>
        {t('title')}
      </h1>
      <section className='w-full flex flex-col justify-start items-center px-2 md:px-0'>
        <div className='flex flex-col justify-start gap-4 w-full md:max-w-prose'>
          <Dropdown title='Frequenly ask question #1'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #2'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #3'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #4'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #5'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #6'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #7'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #8'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #9'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
          <Dropdown title='Frequenly ask question #10'>
            <p className='text-xl font-light text-it-black-1'>
              Lorem ipsum dolor sit amet consectetur. Tristique eleifend molestie nibh velit neque aliquam duis donec sed. Bibendum quis sapien sollicitudin in nullam porttitor interdum. Vulputate pulvinar vulputate bibendum nisl varius ipsum enim pharetra. Fermentum ipsum diam cras turpis eget duis et. pellentesque fringilla. Orci mauris pellentesque egestas massa.
            </p>
          </Dropdown>
        </div>
      </section>
    </div>
  )
}
