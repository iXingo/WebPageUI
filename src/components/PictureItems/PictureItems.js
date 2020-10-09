import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {Paper} from '@material-ui/core';
import {ContentTitleReversed} from '../../components';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  buttonContent: {
    padding: '12px 32px',
    fontSize: 14,
    color: 'white',
    // color: '#1074e7',
    // backgroundColor: 'hsla(0,0%,100%,0)',
    // borderColor: 'rgba(16,116,231,.5)',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid #FFFFFF',
    borderRadius: 3,
    transition: '.2s',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#1a73e8'
  },
  main: {
    padding: '20px 20px 20px',
    margin: 10,
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.12), inset 0 -1px 0 0 #dadce0',
    alignItems: 'center'
  },
  paper: {
    alignItems: 'center'
  },
  firstLine: {
    fontSize: 18,
    color: 'black',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.5,
    marginBottom: 0
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 20,
    paddingTop: 20,
    color: 'black',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  svgIcon: {
    height: 30,
    width: 30
  },
  content: {
    padding: '20px 30px 0',
    backgroundColor: '#1a73e8',

  },
  picture: {
    // height: '100%',
    padding: 15
  },
  items: {
    height: '100%',
    padding: '-1px 15px 0px',
    justifyContent: 'center',
    alignItems: 'center'
  }

}));


const PictureItems = props => {

  const classes = useStyles();
  const {history} = props;
  const handleLink = url => {
    history.push(url);
  };
  return (
    <React.Fragment>
      <CssBaseline/>
      <ContentTitleReversed context={props.context}/>
      <div className={classes.button}>
        <Button variant="outlined" color="primary" className={classes.buttonContent}
                onClick={() => handleLink(props.context.linkUrl)}>
          {props.context.linkText} →
        </Button>
      </div>
      <Grid container justify="center" alignItems="center" className={classes.content}>
        <Grid item xs={12} md={4}>
          <img className={classes.picture} src={props.context.image} alt='Xindog APP'/>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.items}>
            <Paper className={classes.paper}>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit" className={classes.firstLine}>
                  {props.context.titleOne}
                </Typography>
                <Typography paragraph gutterBottom color="textSecondary" className={classes.secondLine}>
                  {props.context.contentOne}
                </Typography>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit" className={classes.firstLine}>
                  {props.context.titleTwo}
                </Typography>
                <Typography paragraph gutterBottom color="textSecondary" className={classes.secondLine}>
                  {props.context.contentTwo}
                </Typography>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit" className={classes.firstLine}>
                  {props.context.titleThree}
                </Typography>
                <Typography paragraph gutterBottom color="textSecondary" className={classes.secondLine}>
                  {props.context.contentThree}
                </Typography>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default withRouter(PictureItems);