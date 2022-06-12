import { Grid } from '@mui/material';
import { TopicRow } from 'pages/forum/components/topic-row';
import './forum-page.css';

const mockData = [{
  title: 'Новые игры',
  subTopicsCount: 222,
  answersCount: 345
}, {
  title: 'Ваши рекорды',
  subTopicsCount: 5,
  answersCount: 14
}, {
  title: 'Идеи и предложения',
  subTopicsCount: 590,
  answersCount: 895
}];

export const ForumPage = () => (
  <div className='main-wrapper'>
    <Grid
      className='grid-wrapper'
      container
      spacing={3}
    >
      {mockData.map((data, i) => (
        <TopicRow key={i} {...data}></TopicRow>
      ))}
    </Grid>
  </div>
);

