import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { AddCircleRounded } from '@mui/icons-material';
import './topic-row.css';

type TProps = {
  title: string;
  subTopicsCount: number;
  answersCount: number;
};

export const TopicRow = (data: TProps) => {
  const { subTopicsCount, answersCount, title } = data;

  return (
    <>
      <Grid item xs={8} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item">
          <p className="grid-item__title grid-item__text">{title}</p>
        </Typography>
      </Grid>
      <Grid item xs={1.6} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item count-item">
          <p className="grid-item__text">{subTopicsCount}</p>
          <AddCircleRounded className="add-icon" />
        </Typography>
      </Grid>
      <Grid item xs={1.3} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item">
          <p className="grid-item__text">{answersCount}</p>
        </Typography>
      </Grid>
    </>
  );
};
