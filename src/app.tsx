import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout/index';
import { useState } from 'react';
import { WelcomePage } from 'pages/welcome-page';
import { LeaderboardPage } from 'pages/leaderboard/index';
import { withProviders } from 'providers';
import { SignUpPage } from 'pages/sugnup';
import { StartGamePage } from 'pages/start-game/index';
import { getUserInfo } from 'services/auth.service';

const CheckUserInSystem = () => {
  const [userLogged, setUserLogged] = useState<boolean>();
  const getUser = async () => {
    try {
      await getUserInfo();
      setUserLogged(true);
    } catch (e) {
      setUserLogged(false);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  setTimeout(async () => {
    await getUser(); // тут не поняла как надо вызывать методы в return и await тут явно не так
  });

  return userLogged ? (
    <ErrorBoundary>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            {/* не поняла как добавить обработчик клика на выход из профиля... */}
            <Route path="/gamestart" element={<StartGamePage />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </ErrorBoundary>
  ) : (
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
export const App = withProviders(() => CheckUserInSystem());
