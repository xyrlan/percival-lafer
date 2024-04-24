import Image from 'next/image'
import React from 'react'

function FifthSection() {
  return (
    <section className=" min-h-screen relative bg-white p-4 lg:p-6 xl:flex items-center">
      <div className='relative w-2/3'>
        <Image src={'/section5chair1.webp'} width={1000} height={700} alt='cadeira-moderna-arquitetura' className='h-auto w-auto' />
      </div>
        <div className='flex gap-10 xl:gap-20 absolute bottom-14 right-0' >
          <div className='tracking-tighter self-center text-nowrap inline-flex items-center gap-2 xl:text-xl'>
            <div className='border-y border-black w-5 ' /> 
            Percival Lafer
          </div>
          <div className='flex gap-3 self-start -translate-y-5 mx-5'>
            <Image src={'/aspas.svg'} width={54} height={60} alt='aspas' className=' ' />
            <Image src={'/aspas.svg'} width={54} height={60} alt='aspas' className='' />
          </div>
          <p className='text-6xl tracking-tight self-end w-full'>Uma madeira fininha <br /> sustenta o sofá,
            porque <br /> tem a alma de aço.</p>
        </div>

    </section>

  )
}

export default FifthSection