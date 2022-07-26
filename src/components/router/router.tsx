import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout';
import { ForumPage } from 'pages/forum';
import { LeaderboardPage } from 'pages/leaderboard';
import { SignInPage } from 'pages/signin';
import { SignUpPage } from 'pages/signup';
import { StartGamePage } from 'pages/start-game';
import { UserPage } from 'pages/user';
import { WelcomePage } from 'pages/welcome-page';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { AccessToken } from 'services/auth/o-auth/actions';
import { isLoggedInIfoSelector } from 'store/auth-reducer';

export const AppRouter = () => {
  const authState = useSelector(isLoggedInIfoSelector);

  if (authState.isLoggedIn) {
    return (
      <MainLayout>
        <BrowserRouter>
          <Route path="/game" component={StartGamePage} />
          <Route path="/leaderboard" component={LeaderboardPage} />
          <Route path="/forum" component={ForumPage} />
          <Route path="/profile" component={UserPage} />
          <Route path="*">
            <Redirect to="/game" />
          </Route>
        </BrowserRouter>
      </MainLayout>
    );
  }
  return (
    <PublicLayout>
      <BrowserRouter>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={SignInPage} />
        <Route path="*" component={AccessToken} />
      </BrowserRouter>
    </PublicLayout>
  );
};
