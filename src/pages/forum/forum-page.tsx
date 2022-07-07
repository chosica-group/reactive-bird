import { Grid, Typography } from '@mui/material';
import { TopicRow } from 'pages/forum/components/topic-row';
// import './forum-page.css';

const mockData = [
  {
    title: 'Новые игры',
    subTopicsCount: 222,
    answersCount: 345,
  },
  {
    title: 'Ваши рекорды',
    subTopicsCount: 5,
    answersCount: 14,
  },
  {
    title: 'Идеи и предложения',
    subTopicsCount: 590,
    answersCount: 895,
  },
];

export const ForumPage = () => (
  <div className="main-wrapper">
    <Grid className="grid-wrapper" container spacing={3}>
      <Grid item xs={8} zeroMinWidth>
        <Typography noWrap component="div">
          <p className="grid-wrapper__column">Форумы</p>
        </Typography>
      </Grid>
      <Grid item xs={1.6} zeroMinWidth>
        <Typography noWrap component="div">
          <p className="grid-wrapper__column">Темы</p>
        </Typography>
      </Grid>
      <Grid item xs={1.3} zeroMinWidth>
        <Typography noWrap component="div">
          <p className="grid-wrapper__column">Ответы</p>
        </Typography>
      </Grid>

      {mockData.map((data, i) => (
        <TopicRow key={i} {...data} />
      ))}
    </Grid>
  </div>
);
