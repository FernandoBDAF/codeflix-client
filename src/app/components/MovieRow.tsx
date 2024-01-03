import Image from 'next/image';

const MovieCard = ({index}:{index: number}) => (
  <div key={index}
            className='h-28 min-w-[100px] group relative bg-gradient-to-t from-transparent to-black
            transiction duration-200 ease-in transform hover:scale-110 hover:z-50
            md:h-48 md:min-w-[200px] lg:h-52 lg:min-w-[300px]'>
            <Image
              src={`/country-${index}.png`}
              alt={`Country ${index}`}
              fill={true}
              className='rounded' />
    </div>
)

export function MovieRow({sectionTitle, movies}: {sectionTitle: string, movies: any[]}) {
  return (
    <div className='flex-col space-y-4 p-8'>
      <div className='flex'>
        <h2 className='text-2xl font-bold inline-flex items-center -ml-8 md:text-4xl'>
          {sectionTitle}
        </h2>
      </div>
      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide -ml-8'>
        {movies.map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
