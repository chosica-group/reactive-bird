import './InfoAboutProject.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { ColorButton } from './styled';

export const InfoAboutProject = () => {
  const navigate = useNavigate();
  const goToSignupPage = () => {
    navigate('/signup', { replace: true });
  };
  return (
    <Card style={{ backgroundColor: '#1976d2', maxWidth: '700px' }} className="infocard">
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" style={{ color: 'white' }}>
          Добро пожаловать на страницу игры Флаппи берд
        </Typography>
        <Typography variant="body2" color="white">
          в рамках учебного проекта в ЯП
        </Typography>
        <div className="infocard__actions">
          <ColorButton className="infocard__action-btn">Вход в аккаунт</ColorButton>
          <div style={{ margin: '10px' }} />
          <ColorButton className="infocard__action-btn" onClick={goToSignupPage}>
            Регистрация
          </ColorButton>
        </div>
      </CardContent>
    </Card>
  );
};
