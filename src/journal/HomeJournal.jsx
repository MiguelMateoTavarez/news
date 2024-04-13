import { Navbar } from "../components/Navbar"
import NewsCard from "../components/NewsCard"
import newsImage1 from '../assets/news/mexico_rompe.jpeg';
import newsImage2 from '../assets/news/palacio.jpg';
import newsImage3 from '../assets/news/banderas.avif';
import newsImage4 from '../assets/news/homeland_sec.webp';
import newsImage5 from '../assets/news/taiwan.png';
import { Container } from "@mui/material";

export const HomeJournal = () => {
  return (
    <>
      <Navbar />
      <Container>
        <div style={{ padding: '20px' }}>
          <NewsCard
            title="México rompe relaciones diplomáticas con Ecuador"
            imageUrl={newsImage1}
            description="Fuerzas especiales de la policía ecuatoriana intentan irrumpir en la embajada de México en Quito para detener al exvicepresidente de Ecuador Jorge Glas, el 5 de abril de 2024..."
            large
          />
          <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', marginTop: '10px' }}>
            <NewsCard
              title="R.D rechaza irrupción en embajada mexicana en Ecuador"
              imageUrl={newsImage2}
              description=""
            />
            <NewsCard
              title="RD colaborará en salida de ciudadanos de USA de Haití"
              imageUrl={newsImage3}
              description=""
            />
          </div>
          <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between', marginTop: '10px' }}>
            <NewsCard
              title="Haitianos que lleguen a USA por mar, serán repatriados"
              imageUrl={newsImage4}
              description=""
            />
            <NewsCard
              title="Réplicas de terremoto en Taiwan, detienen demolición"
              imageUrl={newsImage5}
              description=""
            />
          </div>
        </div>
      </Container>
    </>
  )
}
