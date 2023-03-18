import { Component } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@mui/material';
import CreateModal from './Dialogs/CreateModal';

export default class ContinentCard extends Component {
  state = {
    open: false,
  }

  constructor() {
    super();

    this.handleToggleOpenModal = this.handleToggleOpenModal.bind(this);
  }

  render() {
    const { imageSrc, continentName, description, country } = this.props;
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
              {continentName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {description.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small' onClick={this.handleToggleOpenModal}>Learn More</Button>
          </CardActions>
        </Card>
        <CreateModal
          open={this.open}
          handleOnClose={this.handleToggleOpenModal}
          imageSrc={imageSrc}
          continentName={continentName}
          description={description}
          country={country}
        />
      </>
    )
  }

  handleToggleOpenModal() {
    this.setState({ open: !this.state.open })
  }
}
