import Image from 'next/image'
import React from 'react'

export default function SecondSection() {
  return (
    <section className="flex min-h-screen relative bg-[#efeeef] py-6 xl:px-12 px-6 justify-between ">
      <div className='w-2/3'>
        <Image src={'/section2image.webp'} width={900} height={600} alt='casa-moderna-arquitetura' className='w-full h-auto' />
      </div>
      <div className='w-1/3 flex justify-end'>
        <div className='tracking-tighter max-w-xs xl:max-w-sm leading-5 xl:text-3xl'>
          <p>Somos a TRK, uma imobiliária fora da casa, obstinada em oferecer experiências únicas a todos os nossos clientes, parceiros e colaboradores.</p>
          <br />
          <p>O Pavilhão de Exposições faz parte deste propósito de vivências exclusivas, pois nele, queremos reunir obras únicas, de artistas nacionais e internacionais renomados. </p>
          <br />
          <p>O Pavilhão de Exposições faz parte deste propósito de vivências exclusivas, pois nele, queremos reunir obras únicas, de artistas nacionais e internacionais renomados. </p>
        </div>
      </div>

    </section>
  )
}
