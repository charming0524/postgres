# Express PostgreSQL Full CRUD API

## Features
- PostgreSQL connection with environment variables
- Full CRUD: Create, Read, Update, Delete for `/users`
- Proper error handling and modular structure

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure `.env`:
```
PORT=5000
PG_USER=your_pg_username
PG_PASSWORD=your_pg_password
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=your_database_name
```

3. Create users table in PostgreSQL:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

4. Start the server:
```bash
npm start
```

## API Endpoints

- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user
