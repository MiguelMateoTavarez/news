// src/components/NewsCard.js

import styled from "@emotion/styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";



// Estilos personalizados para la card de noticia
const useStyles = styled((theme) => ({
  card: {
    marginBottom: theme.spacing(2), // Espaciado inferior entre cards
  },
  media: {
    height: 200, // Altura de la imagen de la noticia principal
  },
}));

const NewsCard = ({ title = 'Default title', imageUrl='', description='Default description', large=true }) => {

  return (
    <Card className={useStyles.card}>
        {/* add image */}
      {/* <CardMedia
        className={useStyles.media}
        image={imageUrl}
        title={title}
      /> */}
      <CardContent>
        <Typography variant={large ? "h5" : "h6"} component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
