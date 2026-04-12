# StackOverflowClone

Full-stack Stack Overflow clone with React frontend and Node/Express + MongoDB backend.

## Local Setup

1. Configure backend environment:
	- Copy `server/env.example` to `server/.env`
	- Set real values for:
	  - `CONNECTION_URL`
	  - `JWT_SECRET`
	  - `CLIENT_URL=http://localhost:3000`

2. Configure frontend environment:
	- Copy `client/.env.example` to `client/.env`
	- Keep `REACT_APP_API_URL=http://localhost:5000` for local

3. Install dependencies:
	- `cd server && npm install`
	- `cd client && npm install`

4. Run both apps:
	- Backend: `cd server && npm run dev`
	- Frontend: `cd client && npm start`

## Free Hosting (Recommended)

### Option A (Easy): Frontend on Vercel + Backend on Render

1. Deploy backend (`server`) to Render (Web Service):
	- Build Command: `npm install`
	- Start Command: `npm start`
	- Environment variables on Render:
	  - `PORT=5000`
	  - `CONNECTION_URL=<your atlas uri>`
	  - `JWT_SECRET=<your secret>`
	  - `CLIENT_URL=<your vercel frontend url>`

2. Deploy frontend (`client`) to Vercel:
	- Framework: Create React App
	- Environment variable on Vercel:
	  - `REACT_APP_API_URL=<your render backend url>`

### Option B: Both on Render

1. Backend as Web Service (`server`)
2. Frontend as Static Site (`client`)
	- Build Command: `npm install && npm run build`
	- Publish Directory: `build`
	- Env var: `REACT_APP_API_URL=<backend url>`

## Notes

- If MongoDB Atlas fails with authentication errors, reset DB user password in Atlas and update `CONNECTION_URL`.
- If Atlas blocks access, add your deployed backend IP in Atlas Network Access or allow `0.0.0.0/0` temporarily for testing.
