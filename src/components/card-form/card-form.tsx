import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { CardFormProps } from './card-form.type';
import './card-form.css';

export const CardFormComponent = (props: CardFormProps) => {
  return (
    <Card className="card__card-box">
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
};
