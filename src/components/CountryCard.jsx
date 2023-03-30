import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

export default function CountryCard({
  imageSrc, description, country, city, price,
}) {
  return (
    <>
      <Card sx={{ maxWidth: 345, marginBottom: '25px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageSrc}
          title='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {country}
          </Typography>
          <Typography gutterBottom variant='h6' component='div'>
            {city}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h5' color='text.secondary'>
            {price}$
          </Typography>
          <Button size='small'>
            Buy
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
