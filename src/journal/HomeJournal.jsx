import { Navbar } from "../components/Navbar"
import NewsCard from "../components/NewsCard"
// import newsImage1 from './assets/news1.jpg';
// import newsImage2 from './assets/news2.jpg';
// import newsImage3 from './assets/news3.jpg';

export const HomeJournal = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <NewsCard
          title="Noticia Principal"
          imageUrl=""
          description="Descripción de la noticia principal."
          large
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <NewsCard
            title="Noticia Complementaria 1"
            imageUrl=""
            description="Descripción de la primera noticia complementaria."
          />
          <NewsCard
            title="Noticia Complementaria 2"
            imageUrl="{newsImage3}"
            description="Descripción de la segunda noticia complementaria."
          />
        </div>
      </div>
    </>
  )
}
