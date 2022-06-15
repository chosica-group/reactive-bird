import { MainLayout } from 'layout/main/index';
import { PublicLayout } from 'layout/public-layout/index';
import { LeaderboardPage } from 'pages/leaderboard/index';
import { SignInPage } from 'pages/signin/index';
import { SignUpPage } from 'pages/signup/index';
import { StartGamePage } from 'pages/start-game';
import { WelcomePage } from 'pages/welcome-page/index';
import { Route, Routes } from 'react-router-dom';

const user = false; //

export const AppRouter = () => {
  if (user) {
    return (
      <MainLayout>
        <Routes>
          <Route path="/game" element={<StartGamePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
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
