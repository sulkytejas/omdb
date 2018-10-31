import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import ErrorImage from '../../Utils/images/image-error.png'


const SinglePost = (props) => {
  return (
    <Card
      style={{
        maxWidth:345,
        margin:20,
        alignSelf: 'center'}
      }>
      <CardActionArea>
        <CardMedia
            style ={{height:140}}
            image={props.image === 'N/A' ? ErrorImage : props.image }
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2">
              {props.name}
            </Typography>

            <Typography>
              {props.date}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  )
}

SinglePost.propTypes = {
  image:PropTypes.string,
  name:PropTypes.string,
  date:PropTypes.string,
}

export default SinglePost
