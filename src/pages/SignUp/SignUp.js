import React, {useEffect, useState} from 'react';
import {Link as RouterLink, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import validate from 'validate.js';
import {makeStyles} from '@material-ui/styles';
import {Button, Checkbox, FormHelperText, Grid, IconButton, Link, TextField, Typography} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {notification} from 'antd';
import {checkEmailAvailability, checkUsernameAvailability, signup} from '../../util/APIUtils';

const schema = {
  name: {
    presence: {allowEmpty: false, message: '不能为空'},
    length: {
      maximum: 20,
      minimum: 4,
    }
  },
  username: {
    presence: {allowEmpty: false, message: '不能为空'},
    length: {
      maximum: 15,
      minimum: 3,
    }
  },
  email: {
    presence: {allowEmpty: false, message: '不能为空'},
    email: true,
    length: {
      maximum: 40
    }
  },
  password: {
    presence: {allowEmpty: false, message: '不能为空'},
    length: {
      maximum: 20,
      minimum: 6,
    }
  },
  policy: {
    presence: {allowEmpty: false, message: '不能为空! 必须同意服务协议才能注册!'},
    checked: true
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: 'calc(100vh - 56px)'
  },
  grid: {
    height: '100%'
  },
  quoteContainer: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  quote: {
    backgroundColor: theme.palette.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://img.ixingo.cn/sign-up.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    // color: theme.palette.white,
    color: '#1a73e8',
    fontWeight: 300
  },
  name: {
    marginTop: theme.spacing(3),
    // color: theme.palette.white
    color: '#1a73e8',
  },
  bio: {
    // color: theme.palette.white
    color: '#1a73e8',
  },
  contentContainer: {},
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  logoImage: {
    marginLeft: theme.spacing(4)
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  form: {
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 125,
    flexBasis: 700,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  title: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  },
  policy: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  signUpButton: {
    margin: theme.spacing(2, 0)
  }
}));

const SignUp = props => {

  const {history} = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: !errors,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = event => {
    event.persist();
    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === 'checkbox'
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));

  };
  const handleBack = () => {
    history.goBack();
  };

  const handleSignUp = event => {
    event.preventDefault();
    const values = formState.values;
    const signupRequest = Object.assign({}, values);
    const {username, email} = formState.values;
    checkEmailAvailability(email)
      .then(response => {
        if (response.code === 200) {
          console.log("恭喜！您的邮箱可用");
        } else {
          notification.error({
            message: '星狗网 Web App',
            description: "告诉您一个坏消息，那就是: 您当前邮箱已经被注册！",
          });
        }
      }).catch(error => {
      notification.error({
        message: '星狗网 Web App',
        description: "有错误!" + error.message,
      });
    });

    checkUsernameAvailability(username)
      .then(response => {
        if (response.code === 200) {
          console.log("恭喜您，您的Id可用～");
        } else {
          notification.error({
            message: '星狗网 Web App',
            description: "用户名很受欢迎, 已经被别人占用啦，再选择一个吧～",
          });
        }
      }).catch(error => {
      notification.error({
        message: '星狗网 Web App',
        description: "有错误!" + error.message,
      });
    });


    signup(signupRequest)
      .then(response => {
        if (response.code === 200) {
          notification.success({
            message: '星狗网 Web App',
            description: "谢谢！您已经成功注册！现在请打开邮箱进行验证吧！",
          });
          history.push("/sign-in");
        } else {
          notification.error({
            message: '星狗网 Web App',
            description: response.message || '对不起，好像发生了一些错误，请您重新再试！'
          });
        }
      }).catch(error => {
      notification.error({
        message: '星狗网 Web App',
        description: error.message || '对不起，好像发生了一些错误，请您重新再试！'
      });
    });
  };

  const hasError = field => !!(formState.touched[field] && formState.errors[field]);
  document.title = "星狗网 | 加入星狗网， 看见好时光";

  return (
    <div className={classes.root}>
      <Grid
        className={classes.grid}
        container
      >
        <Grid
          className={classes.quoteContainer}
          item
          lg={6}
        >
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                className={classes.quoteText}
                variant="h1"
              >
                汪师傅:
              </Typography>
              <Typography
                className={classes.quoteText}
                variant="h1"
              >
                看见，好时光
              </Typography>
              <div className={classes.person}>
                <Typography
                  className={classes.name}
                  variant="body1"
                >
                  &copy; Copyright 2021
                </Typography>
                <Typography
                  className={classes.bio}
                  variant="body2"
                >
                  Designed by Shawn Wang in Pudong New Area.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          className={classes.content}
          item
          lg={6}
          xs={12}
        >
          <div className={classes.content}>
            <div className={classes.contentHeader}>
              <IconButton onClick={handleBack}>
                <ArrowBackIcon/>
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <form
                className={classes.form}
                onSubmit={handleSignUp}
              >
                <Typography
                  className={classes.title}
                  variant="h2"
                >
                  建立新账户
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  使用您的电子邮箱以在星狗网建立新的账户
                </Typography>
                <TextField
                  className={classes.textField}
                  error={hasError('name')}
                  fullWidth
                  helperText={
                    hasError('name') ? formState.errors.name[0] : null
                  }
                  label="我们该如何称呼你（昵称）"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.name || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('username')}
                  fullWidth
                  helperText={
                    hasError('username') ? formState.errors.username[0] : null
                  }
                  label="用户名（用户ID）"
                  name="username"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.username || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('email')}
                  fullWidth
                  helperText={
                    hasError('email') ? formState.errors.email[0] : null
                  }
                  label="邮箱地址"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ''}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  error={hasError('password')}
                  fullWidth
                  helperText={
                    hasError('password') ? formState.errors.password[0] : null
                  }
                  label="密码"
                  name="password"
                  onChange={handleChange}
                  type="password"
                  value={formState.values.password || ''}
                  variant="outlined"
                />
                <div className={classes.policy}>
                  <Checkbox
                    checked={formState.values.policy || false}
                    className={classes.policyCheckbox}
                    color="primary"
                    name="policy"
                    onChange={handleChange}
                  />
                  <Typography
                    className={classes.policyText}
                    color="textSecondary"
                    variant="body1"
                  >
                    我已经认真阅读并且同意{' '}
                    <Link
                      color="primary"
                      component={RouterLink}
                      to="/user-agreement"
                      underline="always"
                      variant="h6"
                    >
                      星狗网用户协议
                    </Link>
                  </Typography>
                </div>
                {hasError('policy') && (
                  <FormHelperText error>
                    {formState.errors.policy[0]}
                  </FormHelperText>
                )}
                <Button
                  className={classes.signUpButton}
                  color="primary"
                  disabled={!formState.isValid}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  立即注册
                </Button>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  已有账号?{' '}
                  <Link
                    component={RouterLink}
                    to="/sign-in"
                    variant="h6"
                  >
                    登录
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.object
};

export default withRouter(SignUp);
