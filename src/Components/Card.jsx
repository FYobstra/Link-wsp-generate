import React from 'react'

export default function Card({img,title, subtitle}) {
  return (
    <div className='max-w-full flex flex-col gap-5 p-10 justify-start mx-auto items-center lg:items-start'>
      <img src={img} alt="" className='w-10'/>
      <h1 className='text-primary-text-light dark:text-primary-text-dark font-semibold text-lg text-center md:text-start'>{title}</h1>
      <p className='text-secondary-text-light dark:text-secondary-text-dark text-center md:text-start'>{subtitle}</p>
    </div>
  )
}
