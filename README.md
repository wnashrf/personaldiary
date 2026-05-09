# Personal Diary

A full-stack web application for personal diary management. Users can register, log in, and create diary entries with mood tracking.

## Status

⚠️ **This application is currently in development and may have incomplete features or bugs.**

## Features

- User registration and authentication
- Secure login with JWT tokens
- Create and manage diary entries
- Mood tracking for each entry
- Responsive React frontend
- RESTful API backend with MongoDB

## Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios for API calls
- CSS for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS support

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB instance
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/wnashrf/personaldiary.git
cd personaldiary
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Set up environment variables:
   - Copy `backend/.env` and update the values:
     - `MONGO_URI`: Your MongoDB connection string
     - `JWT_SECRET`: A secure random string for JWT signing
     - `JWT_EXPIRES_IN`: Token expiration time (e.g., "1d")
     - `PORT`: Server port (default: 5000)

5. Seed the database (optional):
```bash
cd backend
npm run seed
```

## Usage

### Running the Application

1. Start the backend server:
```bash
cd backend
npm start
# or for development with auto-reload:
npm run dev
```

2. Start the frontend (in a new terminal):
```bash
cd frontend
npm start
```

3. Open your browser to `http://localhost:3000`

### API Endpoints

#### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

#### Diary Entries
- `POST /api/diaries` - Create a new diary entry (requires auth)
- `GET /api/diaries` - Get user's diary entries (requires auth)
- `PUT /api/diaries/:id` - Update a diary entry (requires auth)
- `DELETE /api/diaries/:id` - Delete a diary entry (requires auth)

## Project Structure

```
personaldiary/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authcontroller.js
│   │   └── diarycontroller.js
│   ├── middleware/
│   │   └── authmiddleware.js
│   ├── models/
│   │   ├── user.js
│   │   └── diary.js
│   ├── routes/
│   │   ├── authroutes.js
│   │   └── diaryroutes.js
│   ├── .env
│   ├── package.json
│   ├── seed.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Login.js
│   │   │   └── Register.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── test.http
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.