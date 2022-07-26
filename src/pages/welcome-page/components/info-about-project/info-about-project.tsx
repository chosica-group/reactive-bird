import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useHistory } from 'react-router-dom';
import './info-about-project.css';
import { ColorButton } from './styled';

export const InfoAboutProject = () => {
  const history = useHistory();
  const goToSignupPage = () => {
    // navigate('/signup', { replace: true });
    history.push('/signup');
  };
  const goToSigninPage = () => {
    // navigate('/login', { replace: true });
    history.push('/login');
  };
  return (
    <Card style={{ backgroundColor: '#1976d2', maxWidth: '700px' }} className="infocard">
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" style={{ color: 'white' }}>
          Добро пожаловать на страницу игры Reactive Bird
        </Typography>
        <Typography variant="body2" color="white">
          в рамках учебного проекта в ЯП
        </Typography>
        <div className="infocard__actions">
          <ColorButton className="infocard__action-btn" onClick={goToSigninPage}>
            Вход в аккаунт
          </ColorButton>
          <div style={{ margin: '10px' }} />
          <ColorButton className="infocard__action-btn" onClick={goToSignupPage}>
            Регистрация
          </ColorButton>
        </div>
      </CardContent>
    </Card>
  );
};
