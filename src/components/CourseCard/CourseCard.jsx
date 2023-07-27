import React, {useState} from 'react'
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Snackbar, Alert} from '@mui/material';
import apiLogic from '../../apiLogic/apiLogic';

const CourseCard = (props) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpenSnackBar(false);
};
  const buyCourse = async () => {
    const result = await apiLogic.buyCourse(props.course._id);
    setOpenSnackBar(true);
  }
  return (
    <Card sx={{  minWidth: 280  }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.course.imageLink? props.course.imageLink: "../../../public/dummy.png"}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.course.description}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Typography variant="subtitle1" color="text.primary">
          Price: {props.course.price}
        </Typography>
        {!props.purchased && <Button size="small" onClick={buyCourse}>Buy</Button>}
        
      </CardActions>
      <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={'success'} sx={{ width: '100%' }}>
          {'Course Purchased'}
        </Alert>
      </Snackbar>
    </Card>
  )
}

export default CourseCard
