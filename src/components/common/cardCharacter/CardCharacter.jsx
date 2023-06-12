import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const CardCharacter = ({character}) => {

  let {image,name,species} = character

  return (
    <Card sx={{ width: 300 }}>
    <CardActionArea>
      <CardMedia
         component="img"
         height="250"
         image={image}
         alt={`Imagen de ${name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {species}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CardCharacter