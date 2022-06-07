import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import type { ComponentType } from 'react';
// import { withAuth } from 'providers/with-auth';
import { LeaderboardPage } from 'pages/leaderboard/index';
import { StartGamePage } from 'pages/start-game/index';
import { WelcomePage } from 'pages/welcome-page/index';
import { SignUpPage } from 'pages/sugnup/index';
import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout/index';

// const userInSystem = withAuth();
const userInSystem = true;

export const withRouter = () => {
  if (userInSystem) {
    return (
      <ErrorBoundary>
        <MainLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/gamestart" element={<StartGamePage />} />
            </Routes>
          </BrowserRouter>
        </MainLayout>
      </ErrorBoundary>
    );
  }
  return (
    <ErrorBoundary>
      <PublicLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </PublicLayout>
    </ErrorBoundary>
  );
};
