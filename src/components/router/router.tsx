import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout';
import { ForumPage } from 'pages/forum';
import { LeaderboardPage } from 'pages/leaderboard';
import { SignInPage } from 'pages/signin';
import { SignUpPage } from 'pages/signup';
import { StartGamePage } from 'pages/start-game';
import { WelcomePage } from 'pages/welcome-page';
import useAuth from 'providers/with-auth';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  const { isAuthorized } = useAuth();

  if (isAuthorized) {
    return (
      <MainLayout>
        <Routes>
          <Route path="/game" element={<StartGamePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="*" element={<Navigate to="/game" />} />
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </PublicLayout>
  );
};
