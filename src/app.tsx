import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'components/error-boundary';
import { MainLayout } from 'layout/main';
import { WelcomeLayout } from 'layout/welcomePage';
import { useState } from 'react';
import { WelcomePage } from 'pages/welcome-page';
import { withProviders } from 'providers';
import { SignUpPage } from 'pages/sugnup';
import { getUserInfo } from './services/auth.service';

const CheckUserInSystem = () => {
  const [userLogged, setUserLogged] = useState(true);
  const getUser = async () => {
    try {
      await getUserInfo();
      setUserLogged(true);
    } catch (e) {
      setUserLogged(false);
      console.log(e, 'e');
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  setTimeout(async () => {
    await getUser(); // тут не поняла как надо вызывать методы в return и await тут явно не так
  });

  return userLogged ? (
    <ErrorBoundary>
      <MainLayout />
    </ErrorBoundary>
  ) : (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <WelcomeLayout>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </WelcomeLayout>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};
export const App = withProviders(() => CheckUserInSystem());
