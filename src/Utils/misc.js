import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

export const ButtonFilter = (props) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={props.onClick}
      style={{margin:5}}
      >
        {props.children}
    </Button>
  )
}

ButtonFilter.propTypes = {
  children: PropTypes.string,
}
