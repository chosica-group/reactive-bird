# Игра Flappy Bird

## Публикация

### Продакшен сбока

`npm run build` - приложение собирается в `./dist`.

## Разработка

### Переменные окружения

Перед работой с проектом необходимо скопировать в корневую дирректорию файл `.env.example` как `.env`.

### Режим разработки

`npm run dev` - запуск в режиме разработки.

Приложение открывается на `http://localhost:{DEV_SERVER_PORT}`.

### Запуск express

`npm run start` - запуск в режиме продакшн.

### Анализ бандла

`npm run build:analyze` - анализ размера бандла продакшена.

Открывается на `http://localhost:{BUILD_ANALYZE_PORT}`.

### Линтер

`npm run lint` - проверка кода линтером.

### Фикс линтера

`npm run fix` - проверка кода линтером и исправление ошибок.

### Работа с docker
- docker pull ubuntu - image from docker hub
- docker build -t flappy .
- docker run -p 3000:3000 -d flappy
- docker stop -t 0 12 (12 - начало CONTAINER ID)