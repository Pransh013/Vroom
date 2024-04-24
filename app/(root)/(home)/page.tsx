import MeetingList from '@/components/MeetingList'
import { date, time } from '@/constants'
import React from 'react'

const Home = () => {
  return (
    <section className='size-full text-white flex flex-col gap-10 bg-foreground'>
      <section className='h-72 w-full rounded-2xl bg-hero bg-cover'>
        <section className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
          <h2 className='glassmorphism max-w-64 text-center rounded-sm text-base py-1'>Upcoming meeting at 8:00 PM</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold lg:text-6xl lg:font-extrabold'>{time}</h1>
            <p className='text-lg font-medium lg:text-2xl text-blue-200'>{date}</p>
          </div>
        </section>
      </section>
      <MeetingList/>
    </section>
  )
}

export default Home