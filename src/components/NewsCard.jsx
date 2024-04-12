// src/components/NewsCard.js

import styled from "@emotion/styled";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";



// Estilos personalizados para la card de noticia
const useStyles = styled((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative', // Para establecer la posición relativa del Card
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    position: 'absolute',
    bottom: 5, // Distancia de 5px desde la parte inferior del Card
    left: 0,
    right: 0,
    margin: '0 auto', // Centra el CardActions horizontalmente
  },
}));

const NewsCard = ({ title = 'Default title', imageUrl = '', description = 'Default description', large = true }) => {
  console.log(imageUrl)
  return (
    <Card className={useStyles.card}>
      <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent className={useStyles.cardContent}>
        <Typography variant={large ? "h5" : "h6"} component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <CardActions className={useStyles.cardActions}>
          <Button variant="contained">Leer más</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
