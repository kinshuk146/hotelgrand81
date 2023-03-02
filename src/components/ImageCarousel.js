import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ImageCarousel(props) {
  return (
    <>
    <Card sx={{ maxWidth: 300, minHeight:425 }} square={true} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.image}
        />
        <CardContent sx={{ maxWidth: 300 }}>
          <Typography gutterBottom variant="h5" component="div" color="#100c3c">
            {props.title}
          </Typography>
          <Typography variant="body2" color="#100c3c">
            {props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
    </>
  );
}
