import { InfoAboutProject } from './components/info-about-project/index';
import css from './welcome-page.css';

export const WelcomePage = () => (
  <div className={css.mainPage}>
    <InfoAboutProject />
  </div>
);
