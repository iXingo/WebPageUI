import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: 5,
    marginBottom: 50,
    color: 'white',
    justifyContent: 'cenetr',
    alignItems: 'center',
    verticalAlign: 'middle'

  },
  items:{
    backgroundColor: '#032f62',
    color: 'white',
    height: 600
  },
  firstLine: { 
    fontSize: 16,
    color: 'white',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 14,
    margin: 'auto',
    color: 'white',
    paddingTop: 10,
    fontWeight: 300,
    lineHeight: 1.5,
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 20,
    paddingTop: 20,
    color: 'white',
    fontWeight: 300,
    lineHeight: 1.5,
  },
  svgIcon: {
    height: 30,
    width: 30
	},
	content: {
    padding: '20px 20px 0',
    marginTop: 45,
  },
	picture: {
    // height: 500,
    marginLeft: -80
  },
  buttonContent: {
    padding: '20px 32px',
    fontSize: 14,
    color: '#1074e7',
    backgroundColor: 'hsla(0,0%,100%,0)',
    borderColor: 'rgba(16,116,231,.5)',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    cursor: 'pointer',
    border: '1px solid #1074e7',
    borderRadius: 3,
    transition: '.2s',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    textAlign: 'center'
  }, 

}));


const CardPicture = props =>  {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
        <Grid container justify="center" alignItems="center" className={classes.content}>
          <Grid item xs={12} md={4}>
            <div className={classes.items}>
              <div className={classes.main}>
                <Typography variant="h6" gutterBottom color="inherit"  className={classes.firstLine}>
                  {props.context.title1}
                </Typography>
                <Typography paragraph gutterBottom color="inherit" className={classes.secondLine}>
                  {props.context.content1}
                </Typography>
              </div>
              <div className={classes.main}>
                <Typography variant="h5" gutterBottom color="inherit" className={classes.firstLine}>
                  {props.context.title2}
                </Typography>
                <Typography paragraph gutterBottom color="inherit" className={classes.secondLine}>
                  {props.context.content2}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={4} >
					  <img className={classes.picture} src={props.context.image} alt='Xindog APP'/>
				  </Grid>
			</Grid>
    </React.Fragment>
  );
};


export default withRouter(CardPicture);