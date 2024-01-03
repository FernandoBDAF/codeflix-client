import Header from './components/Header'
import { MovieRow } from './components/MovieRow';
import { Banner } from './components/Banner';

export default function Home() {
  return (
    <div className='relative h-screen bg-gradient-to-b from-transparent to-black lg:h-[140vh]'>
      <Header />
      <main className='relative pb-24 pl-4 lg:pl-16'>
        <Banner />
        <MovieRow sectionTitle='Lived' movies={[1,2,8]}/>
        <MovieRow sectionTitle='Visited' movies={[3,4,5,6,7,9]}/>
        <MovieRow sectionTitle='All' movies={[1,2,3,4,5,6,7,8,9]}/>
      </main>
    </div>
  )
}
