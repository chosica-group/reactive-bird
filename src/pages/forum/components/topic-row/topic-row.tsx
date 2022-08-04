import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import './topic-row.css';
import type { TTopicResponse } from 'services/topics/types';
import { useNavigate } from 'react-router-dom';

export const TopicRow = (data: TTopicResponse) => {
  const { commentsCount, name } = data;
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/topic/${data.id}`, { replace: true });
  }

  return (
    <>
      <Grid item xs={6} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item">
          <p className="grid-item__title grid-item__text" onClick={onClick}>{name}</p>
        </Typography>
      </Grid>
      <Grid item xs={2} zeroMinWidth>
        <Typography noWrap component="div" className="grid-item">
          <p className="grid-item__text">{commentsCount}</p>
        </Typography>
      </Grid>
    </>
  );
};
