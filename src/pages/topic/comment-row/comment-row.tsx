import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import './comment-row.css';
import type { TTopicCommentsResponse } from 'services/comments/types';

export const CommentRow = (data: TTopicCommentsResponse) => {
  const { comment, createdAt } = data;
  const createdAtDate = new Date(createdAt);

  return (
    <>
      <Grid item xs={10} zeroMinWidth className="comment-grid-row">
        <Typography noWrap component="div" className="comment-item">
          <span className="comment-item__title comment-item__text">{comment}</span>
          <span className="comment-item__date">{createdAtDate.toDateString()}</span>
        </Typography>
      </Grid>
    </>
  );
};
