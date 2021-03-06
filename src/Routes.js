import React, {Component} from 'react';
import {Redirect, Switch, withRouter} from 'react-router-dom';
import {Album as AlbumPage, RouteWithLayout} from './components';
import {Main as MainLayout, Minimal as MinimalLayout} from './layouts';
import {
  About as AboutPage,
  AboutMe as AboutMePage,
  Activate as ActivatePage,
  Agreement as AgreementPage,
  Copyright as CopyrightPage,
  Course as CoursePage,
  Friend as FriendPage,
  Home as HomePage,
  NewsInfo as NewsPage,
  NotAuth as NotAuthPage,
  NotFound as NotFoundPage,
  PasswdReset as PasswdResetPage,
  Post as PostsPage,
  Privacy as PrivacyPage,
  Project as ProjectPage,
  ResetPasswd as ResetPasswdPage,
  Service as ServicePage,
  SignIn as SignInPage,
  SignUp as SignUpPage,
  SingleFriend as SingleFriendPage,
  SingleNews as SingleNewsPage,
  SinglePost as SinglePostPage,
  Tech as TechPage,
} from './pages';
import {General, Notifications, Security, Subscription} from "./pages/Settings/components";
import WindowsService from "./pages/SingleService/Components/WindowsService";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect
          exact
          from="/"
          to="/index"
        />
        <RouteWithLayout
          component={ServicePage}
          exact
          layout={MainLayout}
          path="/services"
          {...this.props}
        />
        <RouteWithLayout
          component={ProjectPage}
          exact
          layout={MainLayout}
          path="/projects"
          {...this.props}
        />
        <RouteWithLayout
          component={AlbumPage}
          exact
          layout={MainLayout}
          path="/album"
          {...this.props}
        />
        <RouteWithLayout
          component={HomePage}
          exact
          layout={MainLayout}
          path="/index"
          {...this.props}
        />
        <RouteWithLayout
          component={SignUpPage}
          exact
          layout={MainLayout}
          path="/sign-up"
          {...this.props}
        />
        <RouteWithLayout
          component={SignInPage}
          exact
          layout={MainLayout}
          path="/sign-in"
          {...this.props}
        />
        <RouteWithLayout
          component={SingleNewsPage}
          exact
          layout={MinimalLayout}
          path="/news/:id"
          {...this.props}
        />
        <RouteWithLayout
          component={NewsPage}
          exact
          layout={MainLayout}
          path="/news"
          {...this.props}
        />
        <RouteWithLayout
          component={SinglePostPage}
          exact
          layout={MinimalLayout}
          path="/post/:id"
          {...this.props}
        />
        <RouteWithLayout
          component={PostsPage}
          exact
          layout={MainLayout}
          path="/posts"
          {...this.props}
        />
        <RouteWithLayout
          component={TechPage}
          exact
          layout={MainLayout}
          path="/tech"
          {...this.props}
        />
        <RouteWithLayout
          component={CoursePage}
          exact
          layout={MainLayout}
          path="/courses"
          {...this.props}
        />
        <RouteWithLayout
          component={SingleFriendPage}
          exact
          layout={MinimalLayout}
          path="/friend/:id"
          {...this.props}
        />
        <RouteWithLayout
          component={NotFoundPage}
          exact
          layout={MinimalLayout}
          path="/not-found"
          {...this.props}
        />
        <RouteWithLayout
          component={PasswdResetPage}
          exact
          layout={MinimalLayout}
          path="/reset-passwd"
          {...this.props}
        />
        <RouteWithLayout
          component={ResetPasswdPage}
          exact
          layout={MinimalLayout}
          path="/pass_reset/:email/:code"
          {...this.props}
        />
        <RouteWithLayout
          component={AgreementPage}
          exact
          layout={MinimalLayout}
          path="/user-agreement"
          {...this.props}
        />
        <RouteWithLayout
          component={PrivacyPage}
          exact
          layout={MinimalLayout}
          path="/privacy"
          {...this.props}
        />
        <RouteWithLayout
          component={CopyrightPage}
          exact
          layout={MinimalLayout}
          path="/copyright"
          {...this.props}
        />
        <RouteWithLayout
          component={FriendPage}
          exact
          layout={MainLayout}
          path="/friends"
          {...this.props}
        />
        <RouteWithLayout
          component={NotAuthPage}
          exact
          layout={MainLayout}
          path="/please-login"
          {...this.props}
        />
        <RouteWithLayout
          component={AboutPage}
          exact
          layout={MinimalLayout}
          path="/about"
          {...this.props}
        />
        <RouteWithLayout
          component={AboutMePage}
          exact
          layout={MinimalLayout}
          path="/about-me"
          {...this.props}
        />
        <RouteWithLayout
          component={ActivatePage}
          exact
          layout={MinimalLayout}
          path="/activate/:email/:activateCode"
          {...this.props}
        />
        <RouteWithLayout
          component={General}
          exact
          layout={MainLayout}
          path="/settings/general"
          {...this.props}
        />
        <RouteWithLayout
          component={Notifications}
          exact
          layout={MainLayout}
          path="/settings/notifications"
          {...this.props}
        />
        <RouteWithLayout
          component={Subscription}
          exact
          layout={MainLayout}
          path="/settings/subscription"
          {...this.props}
        />
        <RouteWithLayout
          component={Security}
          exact
          layout={MainLayout}
          path="/settings/security"
          {...this.props}
        />
        <RouteWithLayout
          component={WindowsService}
          exact
          layout={MinimalLayout}
          path="/service/windows"
          {...this.props}
        />
        <Redirect to="/not-found"/>
      </Switch>
    );
  }
}

export default withRouter(Routes);
