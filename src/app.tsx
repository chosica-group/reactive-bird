import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { WelcomeLayout } from 'layout/welcomePage';
import { useState } from 'react';
import { WelcomePage } from 'pages/welcome-page';
import { LeaderboardPage } from 'pages/leaderboard/index';
import { withProviders } from 'providers';
import { SignUpPage } from 'pages/sugnup';
import { getUserInfo } from './services/auth.service';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          {/* не поняла как добавить обработчик клика на выход из профиля... */}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  ) : (
    <ErrorBoundary>
      <WelcomeLayout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </WelcomeLayout>
    </ErrorBoundary>
  );
};
export const App = withProviders(() => CheckUserInSystem());
