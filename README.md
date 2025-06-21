# 🧭 Mini Job Tracker - MERN Stack

A simple full-stack job tracking web application where users can:

- Add job applications
- View them in a dashboard
- Edit or delete entries
- (Bonus) Analyze job descriptions with OpenAI to improve resume targeting

---

## 🚀 Tech Stack

- **Frontend:** React.js (MERN)
- **Backend:** Express.js + Node.js
- **Database:** MongoDB
- **HTTP Client:** Axios
- **Others:** CORS, dotenv, concurrently
- **Bonus AI:** OpenAI API (for resume insights)

---

## 📦 Features

### ✅ Core Functionality

- Add a job application with:
  - Job Title
  - Company Name
  - Application Link
  - Application Status (Applied, Interviewing, Rejected, Offer)
- View all jobs in a table/dashboard
- Edit or delete any job
- Data is saved in MongoDB

### 🤖 AI Bonus (Optional)

- Paste a job description
- Analyze it using ChatGPT (OpenAI)
- Get:
  - A summary of the job
  - 3 recommended resume skills to highlight

---

## 📁 Project Structure

```
mini-job-tracker/
├── client/               # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── server/               # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── utils/
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Getting Started

### 🛠️ Backend Setup

```bash
cd server
npm install
npm run dev
```

### 💻 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file in the `server/` folder with:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

---

## 📬 API Endpoints

| Method | Route           | Description             |
| ------ | --------------- | ----------------------- |
| GET    | `/api/jobs`     | Get all jobs            |
| POST   | `/api/jobs`     | Add a new job           |
| PUT    | `/api/jobs/:id` | Edit job by ID          |
| DELETE | `/api/jobs/:id` | Delete job by ID        |
| POST   | `/api/analyze`  | Analyze job description |

---

## 🧠 Learnings

- Linking frontend and backend using Express and CORS
- Making API calls with Axios
- Managing data flow with MongoDB and Mongoose
- (Optional) Integrating with OpenAI API

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Fatai Ayeloja
