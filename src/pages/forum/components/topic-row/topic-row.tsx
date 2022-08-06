import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import './topic-row.css';
import type { TTopicResponse } from 'services/topics/types';
import { useHistory } from 'react-router-dom';

export const TopicRow = (data: TTopicResponse) => {
  const { comments, name } = data;
  const history = useHistory();

  const onClick = () => {
    history.push(`/topic/${data.id}`);
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
          <p className="grid-item__text">{comments.length}</p>
        </Typography>
      </Grid>
    </>
  );
};
