import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout';
import { ForumPage } from 'pages/forum';
import { LeaderboardPage } from 'pages/leaderboard';
import { SignInPage } from 'pages/signin';
import { SignUpPage } from 'pages/signup';
import { StartGamePage } from 'pages/start-game';
import { UserPage } from 'pages/user';
import { WelcomePage } from 'pages/welcome-page';
import { TopicPage } from 'pages/topic';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AccessToken } from 'services/auth/o-auth/actions';
import { userInfoSelector } from 'store/auth-reducer';

export const AppRouter = () => {
  const authState = useSelector(userInfoSelector);
  console.log(authState, 'authState');

  if (authState.isLoggedIn) {
    return (
      <MainLayout>
        <Switch>
          <Route path="/game" exact component={StartGamePage} />
          <Route path="/leaderboard" exact component={LeaderboardPage} />
          <Route path="/forum" exact component={ForumPage} />
          <Route path="/profile" exact component={UserPage} />
          <Route path="/topic/:id" exact component={TopicPage} />
          <Redirect from="*" to="/game" />
        </Switch>
      </MainLayout>
    );
  }
  return (
    <PublicLayout>
      <Switch>
        <Route path="/welcome" exact component={WelcomePage} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={SignInPage} />
        <Route path="/" component={AccessToken} />
        <Redirect from="*" to="/" />
      </Switch>
    </PublicLayout>
  );
};
