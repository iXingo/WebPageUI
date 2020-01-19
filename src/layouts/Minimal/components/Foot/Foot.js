import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  footCopyright:{
    paddingTop: 20,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: 20,
    backgroundColor: '#1a73e8'
  },
  footer: {
    textAlign: 'center',
    color: 'white',
  }
}));

const Foot = props => {
  const {className, ...rest} = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footCopyright}>
        <Typography variant="body1" className={classes.footer}>
          <a href={"http://www.ixingo.com.cn/about"} style={{color:'white', textDecoration:'underline'}}>关于星狗</a> |
          <a href={"http://www.ixingo.com.cn/about"} style={{color:'white', textDecoration:'underline'}}>About Xindog</a> |
          服务协议 |
          隐私政策 |
          开放平台 |
          商务洽谈
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          安徽互联网举报中心 |
          安徽省公安厅 |
          抵制违法广告承诺书 |
          版权保护投诉指引 |
          安徽省通管局
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          ICP证: 皖ICP备15011098号
        </Typography>
        <Typography variant="body1" className={classes.footer}>
          违法和不良信息举报电话：0755-83765566-9
        </Typography>
      </div>
    </div>
  );
};

Foot.propTypes = {
  className: PropTypes.string
};

export default Foot;