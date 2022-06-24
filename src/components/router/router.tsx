import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout';
import { ForumPage } from 'pages/forum';
import { LeaderboardPage } from 'pages/leaderboard';
import { SignInPage } from 'pages/signin';
import { SignUpPage } from 'pages/signup';
import { StartGamePage } from 'pages/start-game';
import { UserPage } from 'pages/user/index';
import { WelcomePage } from 'pages/welcome-page/index';
import { Route, Routes } from 'react-router-dom';

const user = true;

export const AppRouter = () => {
  if (user) {
    return (
      <MainLayout>
        <Routes>
          <Route path="/game" element={<StartGamePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/forum" element={<ForumPage />} />
        </Routes>
      </MainLayout>
    );
  }
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
      </Routes>
    </PublicLayout>
  );
};