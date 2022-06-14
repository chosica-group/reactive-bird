import { Grid } from '@mui/material';
import './topic-row.css';
import { AddCircleRounded } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

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
        <Typography noWrap component="div" className="grid-item title-item">
          <p className="grid-item__title">{title}</p>
        </Typography>
      </Grid>
      <Grid item xs={1.6} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item count-item">
          <p>{subTopicsCount}</p>
          <AddCircleRounded className="add-icon" />
        </Typography>
      </Grid>
      <Grid item xs={1.3} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item count-item">
          <p>{answersCount}</p>
        </Typography>
      </Grid>
    </>
  );
};
