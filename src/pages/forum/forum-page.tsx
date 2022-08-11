import { Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { TopicRow } from 'pages/forum/components/topic-row';
import './forum-page.css';
import { useCreateTopicMutation, useGetTopicsQuery } from 'services/topics';
import { PlugComponent } from 'pages/plug';
import { useState } from 'react';

export const ForumPage = () => {
  const { data, isLoading, refetch } = useGetTopicsQuery();
  const [modalWindowOpen, setModalWindowOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [sendData] = useCreateTopicMutation();

  const createTopic = () => {

    if (inputValue) {
      sendData({ name: inputValue });
    }

    refetch();
    setModalWindowOpen(false);
  }

  return (
    isLoading ? <PlugComponent /> :
    <div className="forum-wrapper">
      <Modal open={modalWindowOpen}>
        <div className="create-topic-wrapper">
          <div className="create-topic-container">
            <h3 className="create-topic-header-text">Создать тему</h3>
            <TextField className="input-container" type="text" placeholder="Введите название темы" onChange={(e) => setInputValue(e.target.value)} />

            <div className="create-topic-btns-container">
              <Button className="new-topic-cancel-btn" size="large" variant="contained" onClick={() => setModalWindowOpen(false)}>
                Отменить
              </Button>

              <Button size="large" variant="contained" onClick={createTopic}>
                Создать
              </Button>
            </div>
          </div>
        </div>
      </Modal>

      <Grid className="grid-wrapper" container spacing={3}>
        <Grid item xs={6} zeroMinWidth>
          <Typography noWrap component="div">
            <p className="grid-wrapper__column">Форумы</p>
          </Typography>
        </Grid>
        <Grid item xs={2} zeroMinWidth>
          <Typography noWrap component="div">
            <p className="grid-wrapper__column">Комментарии</p>
          </Typography>
        </Grid>

        {data?.map((data, i) => (
          <TopicRow key={i} {...data} />
        ))}
      </Grid>

      <Button className="create-topic-btn" size="large" variant="contained" onClick={() => setModalWindowOpen(true)}>
        Добавить тему
      </Button>
    </div>
  );
}
