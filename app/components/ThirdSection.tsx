import Image from 'next/image'
import React from 'react'

function ThirdSection() {
  return (
    <section className=" min-h-screen relative bg-white p-4 lg:p-6 flex flex-col ">
      <div className='h-[10%]'>
        <Image src={'/section3layfer.webp'} width={150} height={150} alt='Artista Lafer' className='w-auto h-full' />
      </div>
      <div className=' absolute right-0 top-40 z-0'>
        <Image src={'/section3chair.webp'} width={350} height={350} alt='cadeira moderna arquitetura' className='w-auto h-auto ' />
      </div>
      <div className='z-10 relative '>
        <p className='text-5xl tracking-tighter mt-40 xl:text-6xl '>
          <span className='underline underline-offset-2'>Percival Lafer</span> é um visionário nascido em 1936.
          <br />
          Sua jornada de criatividade e ousadia começa nas experiências únicas do cotidiano, e seguem tecidas nos belos salões da Universidade Mackenzie, onde se formou em Arquitetura. Nosso artista chegou a projetar algumas casas para amigos, além de mobiliários urbanos. Porém, foi nas linhas retas dos sofás, nas curvas de poltronas, no minimalismo de móveis que desafiam as regras, que ele teceu um legado de elegância funcional, aconchego e rebeldia. Percival Lafer criou uma narrativa influente, que inspira o mundo. Seu design ecoa ao longo do tempo, transcende as formas, abraça a inovação e borbulha a inquietude de gerações.
        </p>
      </div>
      <div className=' z-0 self-center mt-2'>
        <Image src={'/section3chair2.webp'} width={138} height={174} alt='cadeira-moderna-arquitetura' className='w-auto h-auto ' />
      </div>
    </section>
  )
}

export default ThirdSection