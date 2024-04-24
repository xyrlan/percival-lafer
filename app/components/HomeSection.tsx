import Image from 'next/image'
import React from 'react'

function HomeSection() {
  return (
    <main className="flex min-h-screen flex-col relative bg-white">
      <div className="flex justify-between lg:p-8 p-4 sticky top-0">
        <span className="text-3xl tracking-tighter">Pavilhão de Exposição TRK</span>
        <span className="font-bold tracking-tight text-sm">A arte de reinventar espaços.</span>
      </div>
      <h1 className="sr-only">Percival Lafer - Pavilhão de Exposição TRK</h1>
      <Image src={'/percival-lafer.svg'} alt="Percival Lafer" width={200} height={200} className="w-full h-auto absolute bottom-0" />
    </main>
  )
}

export default HomeSection