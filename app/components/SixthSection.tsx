import Image from 'next/image'
import React from 'react'
import ChairTitle from './ChairTitle'

function SixthSection() {
  return (
    <section className=" min-h-screen relative bg-white p-4 lg:p-6 ">
      <div className='flex justify-between gap-10 items-start'>
        <Image src={'/p.svg'} width={320} height={420} alt='cadeira-moderna-arquitetura' className=' h-auto w-1/4' />
        <div className='flex flex-col w-1/3'>
          <ChairTitle title='POLTRONA MP-51' year='1971' description={'Na MP-51, há um pacto estabelecido entre a robustez, a elegância e o conforto. O tratado é um convite ao relaxamento total em suas generosas dimensões. A obra é uma fusão de técnicas e materiais:  madeira maciça ovalada forma uma estrutura imponente, enquanto o aço inoxidável fundido proporciona uma junção perfeita entre todos os elementos. O estofamento, desta vez em espuma injetada, é sustentado por uma trama de percintas de sola e de perfilado de aço. O revestimento em couro, marcado por costuras e botões aparentes, confere personalidade à obra. Aprecie.'} >
           
          </ChairTitle>
        </div>
        <Image src={'/section6chair1.webp'} width={900} height={800} alt='cadeira-moderna-arquitetura' className='h-auto w-2/5 ' />
      </div>
    </section>
  )
}

export default SixthSection