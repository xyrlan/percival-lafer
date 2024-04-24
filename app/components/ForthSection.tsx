import Image from 'next/image'
import React from 'react'

function ForthSection() {
  return (
    <section className=" min-h-screen relative bg-white p-4 lg:p-6 ">
      <h2 className='text-5xl tracking-tighter mb-20'>Mobiliário Modernista</h2>
      <div className='flex justify-between h-full'>
        <Image src={'/section4chair1.webp'} width={320} height={420} alt='cadeira-moderna-arquitetura' className='w-1/5 h-auto ' />
        <Image src={'/section4chair2.webp'} width={320} height={420} alt='cadeira-moderna-arquitetura' className='w-1/5 h-auto ' />
        <Image src={'/section4chair3.webp'} width={320} height={420} alt='cadeira-moderna-arquitetura' className='w-1/5 h-auto ' />
      </div>
    </section>
  )
}

export default ForthSection