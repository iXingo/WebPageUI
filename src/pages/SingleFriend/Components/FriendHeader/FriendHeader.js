import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import {CountUp} from "../../../../components";
// import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
  main: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      // padding: theme.spacing(0),
      // paddingTop: 20,
    },
    color: '#1a73e8',
  },
  profile: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 0',
    [theme.breakpoints.up('md')]: {
      padding: 24
      // paddingTop: 20,
    },
  },
  mainImg: {
    objectFit: 'cover',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0),
    },
    height: 400,
  },
}));


const FriendHeader = props => {

  const classes = useStyles();
  const {friend} = props;

  // const Alert = (props) => {
  //   return <MuiAlert elevation={6} variant="filled" {...props} />;
  // }
  let friendTitle = "加载中... | 看见，好时光";
  if (friend.name) {
    friendTitle = friend.name + " | 看见，好时光";
  }
  document.title = friendTitle;

  return (
    <Grid container className={classes.main}>
      <Grid item md={7}>
        <img alt="Cover" className={classes.mainImg} src={friend.pictureUrl}/>
      </Grid>
      <Grid item xs={12} md={5} className={classes.profile}>
        <Typography gutterBottom variant='body1' style={{padding: '10px 0', color: 'black'}}>
          好友
        </Typography>
        <Typography gutterBottom variant='body1' style={{padding: '10px 0', color: '#1a73e8', fontSize: 60}}>
          {friend.name}
        </Typography>
        <Typography gutterBottom variant='h5' style={{padding: '20px 0', color: '#546e7a', fontWeight: 300}}>
          {friend.description}
        </Typography>
        <Typography gutterBottom variant='caption'
                    style={{padding: '20px 0', color: 'black', fontWeight: 300}}>
          【{friend.name}】和 汪师傅 相识大约已有：<CountUp/>
        </Typography>
        {/*<Alert severity="success">This is a success message!</Alert>*/}
        {/*<Button variant="outlined" size="large" color="inherit" >*/}
        {/*  查看更多*/}
        {/*</Button>*/}
      </Grid>

    </Grid>
  );
};


export default FriendHeader;