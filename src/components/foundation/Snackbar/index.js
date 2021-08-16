import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';

export const TypesSnackbar = {
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
};

function Alert(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function SnackbarAlert({ type, message }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

SnackbarAlert.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

SnackbarAlert.defaultProps = {};
