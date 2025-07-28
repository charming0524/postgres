# Express.js + PostgreSQL CRUD API

A simple RESTful API built with Express.js and PostgreSQL.

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL (`pg`)

## 📋 Users Table Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
```
