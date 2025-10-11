<h1 align="center">🚗 motionGo - Car Marketplace</h1>

<p align="center">
  <strong>A modern, full-stack car marketplace built with Next.js 15, featuring authentication, admin panels, and AI-powered features.</strong>
</p>

---

## ✨ Features

- 🔐 **Authentication** — Clerk-based user authentication with role management  
- 👥 **User Roles** — Separate interfaces for users and administrators  
- 🚙 **Car Management** — Full CRUD operations for car listings  
- 📱 **Responsive Design** — Mobile-first layout using Tailwind CSS  
- 🎨 **Modern UI** — Radix UI components integrated with shadcn/ui  
- 🗄️ **Database** — PostgreSQL powered by Prisma ORM  
- 🤖 **AI Integration** — Avi AI for enhanced functionality  
- ☁️ **Cloud Storage** — Supabase integration for assets  
- 🔒 **Security** — Arcjet security for protection and stability  

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | Next.js 15, React 19, Tailwind CSS |
| **Authentication** | Clerk |
| **Database** | PostgreSQL (Supabase) |
| **ORM** | Prisma |
| **UI Components** | Radix UI, shadcn/ui |
| **AI** | Avi AI |
| **Deployment** | Vercel-ready |

---

## 📋 Prerequisites

Before running the project, ensure you have:

- Node.js **v18+**  
- npm / yarn / pnpm  
- Git  

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd car-market-place
2️⃣ Install Dependencies
bash
Copy code
npm install
# or
yarn install
# or
pnpm install
3️⃣ Environment Setup
Make sure your .env file contains the following keys:

ini
Copy code
CLERK_API_KEY=<your_key_here>
DATABASE_URL=<your_supabase_postgres_url>
AI_API_KEY=<your_avi_ai_key>
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
ARCJET_KEY=<your_arcjet_key>
4️⃣ Database Setup
bash
Copy code
# Generate Prisma client
npx prisma generate

# Push schema to the database
npx prisma db push
5️⃣ Run the Development Server
bash
Copy code
npm run dev
# or
yarn dev
# or
pnpm dev
Now, open http://localhost:3000 in your browser 🚀

🧩 Folder Structure
csharp
Copy code
├── app/
│   ├── (admin)/           # Admin panel routes
│   ├── (auth)/            # Authentication pages
│   ├── cars/              # Car listings
│   ├── globals.css        # Global styles
│   └── layout.js          # Root layout
├── components/
│   ├── ui/                # shadcn/ui components
│   └── header.jsx         # Main header component
├── lib/                   # Utility functions
├── prisma/                # Database schema
├── public/                # Static assets
└── actions/               # Server actions
🔑 Key Features
🧍‍♂️ For Users:
Browse and search cars

Save favorite listings

Book test drives

Secure authentication

Fully responsive UI

🧑‍💼 For Admins:
Manage car listings

Handle test drive bookings

Manage users and roles

Dashboard analytics

Application settings

🧠 AI Features
Intelligent search & recommendations

Automated description generation

Car price insights powered by Avi AI

🔧 Available Scripts
bash
Copy code
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint checks
🗄️ Database Models
User — Role-based access (User/Admin)

Car — Details including price, model, year, etc.

Bookings — Test drive requests

SavedCars — User favorites

🔐 Authentication
Powered by Clerk

Email/password & OAuth login

Role-based route protection

Session management

🚀 Deployment
This project is Vercel-ready.
You can also deploy on:

Netlify

Railway

Render

Any Node.js-compatible hosting platform

Ensure environment variables are added in your deployment dashboard.

🤝 Contributing
Fork the repository

Create a new branch (feature/your-feature-name)

Commit your changes

Push your branch

Open a Pull Request

📝 License
This project is private and proprietary.
© 2025 Avi. All rights reserved.

yaml
Copy code
