import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {withRouter} from 'react-router-dom';
import TypeWriter from 'react-typewriter';
import Slide from '@material-ui/core/Slide';
import {
  ButtonPictureContent,
  CardPicture,
  PictureContentLine,
  PictureItems,
  PicturePicture,
  PictureText,
  PictureTextLink,
  TextPicture,
  // TextPictureLink
} from '../../components';


const useStyles = makeStyles(theme => ({
  mainTitle: {
    background: 'url(https://github.githubassets.com/images/modules/site/heroes/simple-codelines.svg), #2b3137',
    width: '100%',
    maxWidth: '100%',
    color: 'hsla(0,0%,100%,.6)',
  },
  main: {
    padding: '210px 10px 120px'
  },
  website: {
    fontSize: 48,
    color: 'white',
    // padding: 10,
    lineHeight: 1.5,
  },
  firstLine: {
    fontSize: 30,
    color: '#1a73e8',
    // padding: 10,
    lineHeight: 1.5,
  },
  secondLine: {
    fontSize: 16,
    margin: 'auto',
    paddingTop: 20,
    lineHeight: 1.5,
  },
  thirdLine: {
    margin: 'auto',
    fontSize: 14,
    paddingTop: 80,
    lineHeight: 1.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  svgIcon: {
    height: 30,
    width: 30
  }

}));


// const featuredPosts = [
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '演示文章',
//     date: '2019年9月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
//   {
//     type: ' 汪师傅和他的朋友们',
//     title: '这是一篇演示文章',
//     date: '2019年10月15日',
//     description:'这是汪师傅的星狗网的一篇文章摘要。程序人生的寂静欢喜。',
//     imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//     url: '/friends',
//   },
// ];

// const card1 = {
//     type: ' 汪师傅和他的朋友们',
//     title: '汪师傅的会客厅！',
//     date: '2019年11月15日',
//     description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//     imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//     url: '/friends',
// };

// const card2 = {
//   type: ' 编程小课堂',
//   title: '汪师傅的编程小课堂！',
//   date: '2019年12月15日',
//   description:'不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。走得远了，也许会遇到一个人，像樵夫，像隐士，像路人，出现在你与高山流水之间，短短几句话，使你大惊失色，引为终生莫逆。现在，请和汪师傅一起走近他们，看见那些正在进行或者被岁月尘封的故事。',
//   imgUrl: 'https://img.ixingo.cn/undraw_special_event_4aj8.svg',
//   url: '/friends',
// };

const contributionSection = {
  sectionMain: '星狗网正在开发测试中',
  sectionTitle: '小楼昨夜又东风，  本站开发测试中。',
  sectionContent: '所有内容和功能正在不断变化中，欢迎提供意见和建议。',

  image: 'https://img.ixingo.cn/undraw_new_decade_n4qd.svg',
  textTitle: '星狗网的前世与今生',
  textContent: '2013年的暑期，我注册了第一个域名"wangxin.ml"(因为.ml与.cf是免费注册的域名服务)，并且在主机屋（免费使用的网站托管服务）使用Wordpress（一个基于PHP开发的全球流行的建站程序）搭建了星狗网的第一个版本',
  linkUrl: '',
  linkText: '更多关于星狗网的故事',
};


const newsSection = {
  sectionMain: '一个平凡人的新闻',
  sectionTitle: '东风未肯入东门，  看看今天啥新闻。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_steps_ngvm.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅的好友',
  contentOne: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  titleTwo: '汪师傅',
  contentTwo: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  titleThree: '汪师傅的好友',
  contentThree: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

};

const blogSection = {
  sectionMain: '汪师傅这一年',
  sectionTitle: '年年岁岁花相似，  岁岁年年人不同。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  imageLeft: 'https://img.ixingo.cn/wangxin2019.png',
  titleLeft: '上海， 这一年。',
  contentLeft: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkTextLeft: '和汪师傅一起展望新年',

  imageRight: 'https://img.ixingo.cn/masterwang2019.png',
  titleRight: '上海， 这一年。',
  contentRight: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkTextRight: '和汪师傅一起回顾2019',
};

const workSection = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '忽如一夜春风来， ',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_dev_productivity_umsq.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',
};

const friendSection = {
  sectionMain: '汪师傅这一年',
  sectionTitle: '今时不与旧日同，  陈年好友情更浓。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/wangxin2019.png',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

};

const selfSection = {
  sectionMain: '工作这一年',
  sectionTitle: '小猪佩奇身上纹，  汪欣也成社会人。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/peiqi.png',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '在一行行代码一封封邮',
};


const sixth = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '问君能有几多愁，   今年汪欣要加油。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_instat_analysis_ajld.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',

};

const programmerSection = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '皎皎空中孤月轮，   汪欣教你学编程。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_hacker_mind_6y85.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',

};


const studySection = {
  sectionMain: '汪师傅和他的朋友们',
  sectionTitle: '夜半无人私语时，   一起研究线程池。',
  sectionContent: '不管你今后如何重要，总会有一天从热闹中逃亡，孤舟单骑，只想与高山流水对晤。是有你的世界在哪里。 不要因为走了太久而忘了我们为什么出发。',

  image: 'https://img.ixingo.cn/undraw_code_review_l1q9.svg',
  title: '上海， 这一年。',
  content: '站在地铁2号线的轨道线前，地铁轨道来风再一次如约吹在我的脸上，也是已经超过一年了。我还清晰记得第一次站在上海地铁二号线前的迷茫与不知所措，谁也不知道未来会发生什么，只是在一列一列穿行的上海地铁前，在一次次上班和下班的路上，在一群群拥挤的上班族之间，在一行行代码一封封邮件前开始了沪漂的生活。  ',
  linkUrl: '',
  linkText: '汪师傅',

  titleOne: '汪师傅',
  contentOne: '站在地铁2号线的轨道线前',

  titleTwo: '汪师傅',
  contentTwo: '站在地铁2号线的轨道线前',

  titleThree: '汪师傅',
  contentThree: '站在地铁2号线的轨道线前',

};


const SvgIcon = () => {
  return (
    <svg style={{width: 20, height: 20}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
      <path
        d="M20 40c11 0 20-9 20-20S31 0 20 0 0 9 0 20s9 20 20 20zm0-2c-9.9 0-18-8.1-18-18S10.1 2 20 2s18 8.1 18 18-8.1 18-18 18zm9.3-18L15 28.8V11.1L29.3 20z"
        fill="currentColor" fillRule="evenodd"/>
    </svg>
  );
};


const Home = props => {

  // const { currentUser } = props;
  const classes = useStyles();

  // if(!currentUser){
  //   return <NotAuth />;
  // }

  return (
    <React.Fragment>
      <CssBaseline/>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={800}>
        <Container className={classes.mainTitle}>
          <div className={classes.main}>
            <Typography variant="h1" gutterBottom color="inherit" align="center" className={classes.website}>
              星狗网
            </Typography>
            <Typography variant="h1" gutterBottom color="primary" align="center" className={classes.firstLine}>
              程序人生的寂静欢喜。
            </Typography>
            <TypeWriter typing={1}>
              <Typography variant="subtitle1" gutterBottom color="inherit" align="center"
                          className={classes.secondLine}>
                车马很慢，书信很远。一个（伪）文艺派程序员，在这个漫长的人生做一些简单的思考。
              </Typography>
            </TypeWriter>
            <Typography variant="h4" gutterBottom color="primary" align="center" className={classes.thirdLine}>
              <SvgIcon/> 与其在别处仰望， 不如在这里并肩。
            </Typography>
          </div>
        </Container>
      </Slide>

      <PictureTextLink context={contributionSection} {...props}  />
      <PictureItems context={newsSection} {...props} />
      <PicturePicture context={blogSection} {...props} />
      <CardPicture context={workSection} {...props}  />
      <PictureText context={selfSection} {...props} />
      <PictureContentLine context={friendSection} {...props}  />
      <TextPicture context={sixth} {...props} />
      <PictureTextLink context={studySection} {...props}  />
      <ButtonPictureContent context={programmerSection} {...props}  />
      <img src={"https://img.ixingo.cn/wang-xin-alone.png"} style={{width: '100%', paddingTop: 40}}  alt={'wangxin'}/>
    </React.Fragment>
  );
};


export default withRouter(Home);