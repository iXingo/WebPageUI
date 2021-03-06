import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    card: {
      maxWidth: 345,
      margin: 20,
      background: 'transparent',
      boxShadow: 'none',
    },
    media: {
      height: 140,
    },
    avatar: {
      margin: 'auto',
      width: 200,
      height: 200,
    },
    bigAvatar: {
      margin: 10,
      width: 200,
      height: 200,
    },
    name: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18,
      color: '#1a73e8',
    },
    button: {
      justifyContent: 'center',
    },
    intro: {
      fontSize: 14,
    },
    title: {
      textAlign: 'center',
      fontSize: 14,
      color: 'black',
      fontWeight: 500,
      margin: '10px 0'
    }
  })
);


const People = props => {
  const classes = useStyles();
  const {friend, history} = props;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = event => {
    event.preventDefault();
    const id = friend.id;
    console.log('/friend/' + id);
    history.push('/friend/' + id);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card} value={friend.id} onClick={handleClickOpen}>
        <CardActionArea>
          <Grid container justify="center" alignItems="center" className={classes.avatar}>
            <Avatar alt="Remy Sharp" src={friend.pictureUrl} className={classes.bigAvatar}/>
          </Grid>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
              {friend.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.title}>
              {friend.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.intro}>
              {friend.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions className={classes.button}>
            <Button size="small" color="primary" value={friend.id} onClick={handleClickOpen} >查看</Button>
            <Button size="small" color="primary">分享</Button>
          </CardActions> */}
      </Card>
      <div>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"好友"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                您暂时没有权限查看这篇博文。
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClickOpen} value={friend.id} color="primary">
                知道了
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default People;