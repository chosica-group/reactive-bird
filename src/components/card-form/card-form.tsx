import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './card-form.css';
import type { CardFormProps } from './card-form.type';

export const CardFormComponent = (props: CardFormProps) => (
  <Card className="card__card-box">
    <CardContent>{props.children}</CardContent>
  </Card>
);
