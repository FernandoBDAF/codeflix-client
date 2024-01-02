import Image from 'next/image'
import Header from './components/Header'

export default function Home() {
  return (
    <div className='relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black'>
            <Image
              src='/pulpfiction.jpeg'
              alt="The Witcher"
              fill={true}
              className='h-[65vh} object-cover object-top lg:h-[95vh]'
            />
          </div>
          
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Witcher
          </h1>
          <p className='text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Geralt of Rivia, a mutated monster-hunter for hire, journeys toward
            his destiny in a turbulent world where people often prove more
            wicked than beasts.
          </p>
        </div>
        <div className='flex space-x-3'>
          <button className='md:text-xl cursor-pointer items-center rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            Play
          </button>
          <button className='md:text-xl cursor-pointer items-center rounded bg-gray-400 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            More Info
          </button>
        </div>
         
      </main>
    </div>
  )
}
