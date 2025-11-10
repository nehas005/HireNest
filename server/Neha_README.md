# 🧠 HireNest — Database & Integration Setup (Neha)

### 👩‍💻 **Developer:** Neha  
**Role:** Database & Integration Developer  
**Tech Stack:** Node.js · Express · MongoDB · Mongoose

---

## ⚙️ Setup Instructions

### 🪜 1. Install Dependencies
```bash
cd server
npm install
```

### 🪜 2. Configure Environment
**File:** `.env`
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/hirenest
```

### 🪜 3. Run the Server
```bash
npm run dev
```

✅ You should see:
```
✅ MongoDB Connected: 127.0.0.1
🚀 Server running on port 5000
```

Visit: [http://localhost:5000/api/test](http://localhost:5000/api/test)  
Expected Output:
```json
{ "message": "✅ DB Connected", "users": 0 }
```

---

## 🧩 Database Models Overview

| Model | File | Key Fields |
|--------|------|------------|
| **User** | `models/User.js` | name, email, password, role, skills |
| **Job** | `models/Job.js` | title, description, recruiterId |
| **Application** | `models/Application.js` | jobId, applicantId, status |
| **Message** | `models/Message.js` | senderId, receiverId, text |
| **Schedule** | `models/Schedule.js` | recruiterId, candidateId, jobId, date |

👉 All models use **timestamps** and **ObjectId references** for linking.

---

## 🔗 Relationships Between Collections

- **User → Job:** Recruiter posts multiple jobs  
- **User → Application:** Candidate applies to many jobs  
- **User ↔ Message:** Recruiter & candidate chat  
- **User → Schedule → Job:** Interview scheduled for a specific job  

---

## 🔧 Integration for **Sravya** (Backend Developer)

- Import Neha’s models into your controllers:
  ```js
  import User from "../models/User.js";
  import Job from "../models/Job.js";
  import Application from "../models/Application.js";
  ```
- Use `populate()` to expand related data:
  ```js
  const apps = await Application.find()
    .populate("jobId")
    .populate("applicantId");
  ```
- Secure routes with JWT middleware and organize APIs:
  ```
  /api/auth → authRoutes.js
  /api/jobs → jobRoutes.js
  /api/applications → applicationRoutes.js
  /api/messages → messageRoutes.js
  /api/schedules → scheduleRoutes.js
  ```

---

## 🌐 Integration for **Nishitha** (Frontend Developer)

Use these API endpoints (to be built using Neha’s models):  
| Module | Method | Endpoint | Purpose |
|---------|--------|-----------|----------|
| Auth | POST | `/api/auth/register` | Register a user |
| Auth | POST | `/api/auth/login` | Login a user |
| Jobs | GET | `/api/jobs` | Fetch all jobs |
| Jobs | POST | `/api/jobs` | Post a new job |
| Applications | POST | `/api/applications` | Apply for a job |
| Messages | POST | `/api/messages` | Send a message |
| Schedule | POST | `/api/schedules` | Schedule an interview |

**Frontend Flow:**  
React (Axios) → Express (API routes) → MongoDB (Mongoose models)

---

## 🧠 Smart Match (Optional Feature)
Later, a helper can suggest jobs based on candidate skills:
```js
import Job from "../models/Job.js";

export const smartMatchJobs = async (skills) => {
  return await Job.find({ skillsRequired: { $in: skills } }).limit(10);
};
```

---

## ✅ Deliverables Summary

| Task | Status |
|------|--------|
| MongoDB Connection Working | ✅ |
| All Schemas Created | ✅ |
| Relationships Defined | ✅ |
| Test Route Functional | ✅ |
| Ready for Backend + Frontend Integration | ✅ |

---

### 🏁 Neha’s Work Completed:
**✅ Fully operational MongoDB integration layer — ready for Sravya (API development) and Nishitha (frontend connection).**
