import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
// import {Button} from '@material-ui/core';
import {SearchInput} from '../../../../components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ServiceToolbar = props => {
  const {className, ...rest} = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/*<div className={classes.row}>*/}
      {/*  <span className={classes.spacer}/>*/}
      {/*  <Button className={classes.importButton}>Import</Button>*/}
      {/*  <Button className={classes.exportButton}>Export</Button>*/}
      {/*  <Button*/}
      {/*    color="primary"*/}
      {/*    variant="contained"*/}
      {/*  >*/}
      {/*    Add product*/}
      {/*  </Button>*/}
      {/*</div>*/}
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="检索服务(开发中)"
        />
      </div>
    </div>
  );
};

ServiceToolbar.propTypes = {
  className: PropTypes.string
};

export default ServiceToolbar;
