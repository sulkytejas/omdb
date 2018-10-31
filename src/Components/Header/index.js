import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = (props) => {
  return (
    <AppBar
      position="static"
      color="primary"
      >
      <Toolbar>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          style={{
            color:'#ffffff',
            paddingTop:10,
            margin:'auto'
          }}
          >
          OMDB
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
