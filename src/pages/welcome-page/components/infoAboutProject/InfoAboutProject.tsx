import './InfoAboutProject.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { Button, CardActionArea } from '@mui/material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

export const InfoAboutProject = () => (
  <Card style={{ backgroundColor: '#1976d2', maxWidth: '700px' }} className="infocard">
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h4" component="div" style={{ color: 'white' }}>
          Добро пожаловать на страницу игры Флаппи берд
        </Typography>
        <Typography variant="body2" color="white">
          в рамках учебного проекта в ЯП
        </Typography>
      </CardContent>
    </CardActionArea>
    <div className="infocard__actions">
      <ColorButton className="infocard__action-btn">Вход в аккаунт</ColorButton>
      <div style={{ margin: '10px' }} />
      <ColorButton className="infocard__action-btn">регистрация</ColorButton>
    </div>
  </Card>
);
