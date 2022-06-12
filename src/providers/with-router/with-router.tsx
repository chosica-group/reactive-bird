import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout';
// import { withAuth } from 'providers/with-auth';
import { LeaderboardPage } from 'pages/leaderboard/index';
import { SignUpPage } from 'pages/signup/index';
import { StartGamePage } from 'pages/start-game/index';
import { WelcomePage } from 'pages/welcome-page/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// const userInSystem = withAuth();
const userInSystem = true;

export const withRouter = () => {
  if (userInSystem) {
    return (
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/gamestart" element={<StartGamePage />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    );
  }
  return (
    <PublicLayout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </PublicLayout>
  );
};
