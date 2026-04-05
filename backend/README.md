# TrackZen Backend

Basic Express backend scaffold with environment config, middleware setup, and health check route.

## Quick start

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## Endpoints

- `GET /` - service info
- `GET /api/v1/health` - health status

## Folder structure

```
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── tests/
├── .env.example
├── .gitignore
└── package.json
```
