# Employee Profile Management Application

## How to use

### Backend

- `npm run start:dev`

### Frontend

- Create an environment variable `.env` or `.env.local` in folder `frontend` and paste this code:
  ```
    API_ENDPOINT="http://localhost:3001/api/v1"
    API_EMPLOYEES="/employee"
    API_POSITION="/position"
    API_TOOL_LANGUAGE="/tool-language"
    API_PHOTOS="/photos?limit=132"
  ```
- Run `npm run dev`.

## Used library

### Frontend:

- React
- Redux Toolkit
- Redux Saga
- Tailwind CSS
- Ant Design
- Dayjs
- react-infinite-scroller

### Backend:

- NestJS
- Sequelize
- SQLite3

## Database structure

![Imgur](https://i.imgur.com/KOsAVGe.png)
