import { Grid } from '@mui/material';
import './topic-row.css';
import { AddCircleRounded } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

type TProps = {
  title: string,
  subTopicsCount: number,
  answersCount: number
}

export const TopicRow = (data: TProps) => (
  <><Grid item xs={8} zeroMinWidth>
    <Typography noWrap component="div" className='grid-item title-item'>
      <p className='grid-item__title'>{data.title}</p>
    </Typography>
  </Grid>
  <Grid item xs={1.6} zeroMinWidth>
    <Typography noWrap component="div" className='grid-item count-item'>
      <p>{data.subTopicsCount}</p>
      <AddCircleRounded className='add-icon'></AddCircleRounded>
    </Typography>
  </Grid>
  <Grid item xs={1.3} zeroMinWidth>
    <Typography noWrap component="div" className='grid-item count-item'>
      <p>{data.answersCount}</p>
    </Typography>
  </Grid></>
);

