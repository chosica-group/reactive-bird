import { MainLayout } from 'layout/main';
import { PublicLayout } from 'layout/public-layout';
import { LeaderboardPage } from 'pages/leaderboard/index';
import { SignUpPage } from 'pages/signup/index';
import { StartGamePage } from 'pages/start-game/index';
import { WelcomePage } from 'pages/welcome-page/index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const userInSystem = false;

// export const withAuth = async () => { // это не ненужный код а пример ( тут будет чтото типа того )
//   try {
//     await getUserInfo();
//     return true;
//   } catch (e) {
//     return false;
//   }
// };

export const withRouter = () => {
  if (userInSystem) {
    return (
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/game" element={<StartGamePage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <PublicLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/login" element={<SignInPage />} /> */}
        </Routes>
      </PublicLayout>
    </BrowserRouter>
  );
};
