import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4),
  },
  content: {
    paddingTop: 100,
    textAlign: 'center',
    marginTop: 120,
    marginBottom: 120
  },
  image: {
    marginTop: 50,
    display: 'inline-block',
    maxWidth: '100%',
    height: 200
  }
}));

const ActivatePage = props =>  {
  const classes = useStyles();
  if(props.info.code === -1){
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">加载中。。。</Typography>
            
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  if(props.info.code === 200){
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">用户激活成功！</Typography>
              <Typography variant="subtitle2">根据提示， 就可畅游星狗网。</Typography>
              <Typography variant="subtitle2">{props.info.data}</Typography>
              <img alt="Under development" className={classes.image} src="https://img.ixingo.cn/undraw_page_not_found_su7k.svg"/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }else{
    return (
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h1">用户激活失败！</Typography>
              <Typography variant="subtitle2">还差一步， 就可畅游星狗网。</Typography>
              <Typography variant="subtitle2">{props.info.data}</Typography>
              <img alt="Under development" className={classes.image} src="https://img.ixingo.cn/undraw_page_not_found_su7k.svg"/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
  
};

export default ActivatePage;
