import { Grid, TextField, Typography } from '@mui/material';
import './topic-page.css';
import { useGetTopicQuery } from 'services/topics';
import { useAddCommentToTopicMutation, useGetTopicCommentsQuery } from 'services/comments';
import { PlugComponent } from 'pages/plug';
import { CommentRow } from 'pages/topic/comment-row';
import { useParams } from 'react-router-dom';

export const TopicPage = () => {
  const params = useParams<{ id: string }>();
  const comments = useGetTopicCommentsQuery(params.id as string);
  const topic = useGetTopicQuery(params.id as string);
  const [sendData] = useAddCommentToTopicMutation();

  const onEnterPressed = (field: any) => {
    sendData({ id: `${topic?.data?.id}`, comment: field?.value});
    comments.refetch();
  }

  return (
    (comments.isLoading || topic.isLoading) ? <PlugComponent /> :
      <div className="topic-container">
        <div className="topic-wrapper">
          <h1>{topic.data?.name}</h1>
          <Grid className="grid-wrapper" container spacing={3}>
            <Grid item xs={10} zeroMinWidth>
              <Typography noWrap component="div">
                <p className="grid-wrapper__column">Комментарии</p>
              </Typography>
            </Grid>

            {comments.data?.map((data, i) => (
              <CommentRow key={i} {...data} />
            ))}
          </Grid>
        </div>

        <div className="input-wrapper">
          <TextField className="input-container" type="text" placeholder="Введите текст комментария" onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onEnterPressed(e.target);
            }
          }} />
        </div>
      </div>
  );
}
