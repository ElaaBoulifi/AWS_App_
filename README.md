# SkillHub App

SkillHub is a full-stack serverless web application that connects users based on the skills they offer and the skills they want to learn.  
It is designed to be lightweight, scalable, and deployable on AWS using the Serverless Framework.

---


## 📁 Project Structure



skillhub-app/
│
├── backend/ # Node.js + Express + Serverless framework
│ ├── routes/
│ ├── controllers/
│ ├── handler.js
│ └── serverless.yml
│
├── frontend/ # React frontend (currently in setup phase)
│ └── (Coming soon)
│
└── README.md



---

## 🔧 Backend Setup (Serverless + Express)

### Prerequisites

- Node.js ≥ 18
- `serverless` CLI installed globally

```bash
npm install -g serverless



Install dependencies :
cd backend
npm install

Run locally
npm run dev
Serverless Offline will run the API at: http://localhost:3000/dev

Health Check

curl http://localhost:3000/dev/health
Expected response:


{
  "success": true,
  "message": "SkillHub API is running",
  "environment": "local",
  "services": {
    "database": "none",
    "storage": "none",
    "auth": "none"
  }
}
🎯 Create User API Example

curl -X POST http://localhost:3000/dev/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Elaa",
    "email": "elaa@example.com",
    "skillsOffered": ["React"],
    "skillsWanted": ["AWS"]
  }'
Expected response:

json
{
  "success": true,
  "user": {
    "id": "some-id",
    "name": "Elaa",
    "email": "elaa@example.com",
    "skillsOffered": ["React"],
    "skillsWanted": ["AWS"],
    "createdAt": "2025-07-15T13:15:07.630Z"
  }
}

🚧 Frontend Setup (Coming Soon)
The frontend is a React app under the frontend/ directory. It is currently in the setup phase and will include:

User registration and login

Skill search and matchmaking

Profiles, messaging, and dashboard

🌍 Deployment
The backend is designed to run as AWS Lambda functions using the Serverless Framework.
📌 Author
👩‍💻 Elaa Boulifi

📜 License
MIT
