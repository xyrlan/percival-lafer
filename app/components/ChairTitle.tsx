import React from 'react'

function ChairTitle({ title, year, description }: any) {
  return (
    <>
      <h2 className='text-2xl 2xl:text-3xl font-bold tracking-tighter'>
        {title}
      </h2>
      <p className='text-sm 2xl:text-lg text-gray-800 tracking-tighter font-medium'>
       Ano: {year}
      </p>
      <p className='text-lg 2xl:text-2xl text-gray-800 tracking-tighter mt-10 2xl:mt-20 leading-6 '>
        {description}
      </p>
    </>
  )
}

export default ChairTitle