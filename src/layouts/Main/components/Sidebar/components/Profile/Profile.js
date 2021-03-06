import React from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const {className, onClose, currentUser} = props;

  const classes = useStyles();

  const user = {
    name: '请登录',
    avatar: 'https://img.ixingo.cn/default_head_pic.png',
    bio: '👆点击头像以进行登录'
  };
  if (!currentUser) {
    return (
      <div
        className={clsx(classes.root, className)}
      >
        <Avatar
          alt={user.name}
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/sign-in"
          onClick={onClose}
        />
        <Typography
          className={classes.name}
          variant="h4"
        >
          {user.name}
        </Typography>
        <Typography variant="body2">{user.bio}</Typography>
      </div>
    );
  } else {
    return (
      <div
        className={clsx(classes.root, className)}
      >
        <Avatar
          alt="Person"
          className={classes.avatar}
          component={RouterLink}
          src={currentUser.headUrl}
          to="/settings/general"
          onClick={onClose}
        />
        <Typography
          className={classes.name}
          variant="h4"
        >
          {currentUser.name}
        </Typography>
        <Typography variant="body2">欢迎回来, {currentUser.name}</Typography>
      </div>
    );
  }
};

Profile.propTypes = {
  className: PropTypes.string
};

export default withRouter(Profile);
