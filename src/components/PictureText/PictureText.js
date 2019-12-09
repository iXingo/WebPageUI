import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  mainTitle: {
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '10px 10px 10px'
  },
  firstLine: { 
    fontSize: 16,
    padding: 10,
  },
  secondLine: {
    fontSize: 48,
    margin: 'auto',
    color: 'black',
    paddingTop: 20,
    lineHeight: 1
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 20,
    paddingTop: 20,
    lineHeight: 1
  },
  svgIcon: {
    height: 30,
    width: 30
	},
	content: {
		padding: '0 20px'
	},
	picture: {
		height: 500,
	}

}));


const SvgIcon = () => {
  return (
  <svg style={{width:20, height:20}} xmlns="http://www.w3.org/2000/svg" class="jumbotron-followup-icon ml-1 jumbotron-link-followup-icon ml-1" viewBox="0 0 40 40"><path d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z" fill="currentColor" fill-rule="evenodd"></path></svg>
  );
}

const PictureText = props => {

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
			<Grid container justify="center" className={classes.content}>
				<Grid item xs={12} md={4} >
					<img className={classes.picture} src='https://github.githubassets.com/images/modules/site/product-illo/img-actions.png' alt='Xindog APP'/>
					<div className={classes.main}>
						<Typography variant="h6" gutterBottom color="textSecondary" align="center" className={classes.thirdLine}>
							新闻现场
						</Typography>
						<Typography paragraph gutterBottom color="inherit" align="center" className={classes.firstLine}>
								Build, test, deploy, and run CI/CD the way you want in the same place you manage code. Trigger Actions from any GitHub event to any available API. Build your own Actions in the language of your choice, or choose from thousands of workflows and Actions created by the community.	
						</Typography>
						<Typography variant="h4" gutterBottom color="textSecondary" align="center" className={classes.thirdLine}>
							<SvgIcon /> 寻常巷陌, 熙熙攘攘. 故事每天发生, 抓住每一个不一样的瞬间.
						</Typography>   
					</div>
				</Grid>
				<Grid item xs={12} md={4}>
					<img className={classes.picture} src='https://github.githubassets.com/images/modules/site/product-illo/img-packages.png' alt='Xindog APP'/>
					<div className={classes.main}>
						<Typography variant="h6" gutterBottom color="textSecondary" align="center" className={classes.thirdLine}>
							新闻现场
						</Typography>
						<Typography paragraph gutterBottom color="inherit" align="center" className={classes.firstLine}>
								Build, test, deploy, and run CI/CD the way you want in the same place you manage code. Trigger Actions from any GitHub event to any available API. Build your own Actions in the language of your choice, or choose from thousands of workflows and Actions created by the community.	
						</Typography>
						<Typography variant="h4" gutterBottom color="textSecondary" align="center" className={classes.thirdLine}>
							<SvgIcon /> 寻常巷陌, 熙熙攘攘. 故事每天发生, 抓住每一个不一样的瞬间.
						</Typography>   
					</div>
				</Grid>
			</Grid>
    </React.Fragment>
  );
};


export default withRouter(PictureText);