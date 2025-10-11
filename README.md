<div align="center">

# 🚗 motionGo
### *AI-Powered Car Marketplace*

<p>
A modern, full-stack car marketplace built with Next.js 15 App Router.<br>
Features robust authentication, dedicated admin panels, AI-driven insights, and a sleek responsive UI.
</p>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://postgresql.org)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://prisma.io)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

## 📸 Live Demo & Preview

> **🌐 Live Demo:** [motionGo Live](https://your-live-demo-link.com) *(Coming Soon)*

<details>
<summary><strong>📱 Application Screenshots</strong></summary>

| 🏠 Home Page | 🚙 Car Details | 👨‍💼 Admin Dashboard |
|:---:|:---:|:---:|
| *Screenshot Coming Soon* | *Screenshot Coming Soon* | *Screenshot Coming Soon* |

</details>

---


## ✨ Key Features

<table>
<tr>
<td width="50%" valign="top">

### 👥 **For Users**

🔐 **Secure Authentication**  
Easy sign-up/login with Clerk authentication

🔍 **Advanced Search & Filtering**  
Find cars by make, model, year, price & more

❤️ **Favorites System**  
Save cars to personal watchlist

🚗 **Test Drive Booking**  
Schedule test drives seamlessly

📱 **Fully Responsive**  
Perfect experience on all devices

</td>
<td width="50%" valign="top">

### 🧑‍💼 **For Administrators**

🛡️ **Protected Admin Panel**  
Secure interface for platform management

📋 **Car Listing Management**  
Full CRUD operations for all listings

📅 **Booking Management**  
Handle test drive requests efficiently

👨‍💼 **User Management**  
Control user roles and permissions

📊 **Analytics Dashboard**  
Track platform performance metrics

</td>
</tr>
</table>

### 🤖 **AI-Powered Intelligence**

| Feature | Description |
|---------|-------------|
| 🎯 **Smart Recommendations** | AI-driven car suggestions based on user behavior |
| ✍️ **Auto Descriptions** | Generate compelling, SEO-friendly car descriptions |
| 💰 **Price Intelligence** | Market analysis for optimal pricing insights |

---

## 🛠️ Technology Stack

<div align="center">

| **Frontend** | **Backend** | **Database** | **Services** |
|:---:|:---:|:---:|:---:|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white) | ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat&logo=clerk&logoColor=white) |
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white) | ![Gemini AI](https://img.shields.io/badge/Gemini_AI-4285F4?style=flat&logo=google&logoColor=white) |
| ![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | | ![Arcjet](https://img.shields.io/badge/Arcjet-FF6B6B?style=flat&logoColor=white) |

</div>

<details>
<summary><strong>🔧 Detailed Tech Breakdown</strong></summary>

| **Category** | **Technology** | **Purpose** |
|--------------|---------------|-------------|
| 🚀 **Framework** | Next.js 15 + React 19 | Full-stack React framework with App Router |
| 🗄️ **Database** | PostgreSQL + Prisma | Robust relational database with type-safe ORM |
| 🔐 **Auth** | Clerk | Complete authentication solution |
| 🎨 **UI/UX** | Tailwind CSS + shadcn/ui + Radix UI | Modern, accessible component system |
| 🤖 **AI** | Google Gemini AI | Intelligent features and automation |
| ☁️ **Storage** | Supabase | File storage and real-time capabilities |
| 🛡️ **Security** | Arcjet | Advanced security and rate limiting |
| 🚀 **Deployment** | Vercel | Seamless deployment and hosting |

</details>

---

## 🚀 Quick Start Guide

### 📋 Prerequisites

> **System Requirements:**
> - 🟢 **Node.js** 18.0.0 or higher
> - 🟢 **Git** for version control
> - 🟢 **Package Manager** (npm/yarn/pnpm)

### ⚡ Installation Steps

<details>
<summary><strong>Step 1: Clone Repository</strong></summary>

```bash
git clone https://github.com/Arth9vansola/carMarketPlace_ai.git
cd car-market-place
```

</details>

<details>
<summary><strong>Step 2: Install Dependencies</strong></summary>

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

</details>

<details>
<summary><strong>Step 3: Environment Setup</strong></summary>

Create `.env` file in root directory:

```env
# 🗄️ Database Configuration
DATABASE_URL="postgresql://username:password@host:port/database"
DIRECT_URL="postgresql://username:password@host:port/database"

# 🔐 Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# 🤖 AI Integration
GEMINI_API_KEY=your_gemini_api_key

# ☁️ Storage (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# 🛡️ Security
ARCJET_KEY=your_arcjet_key
```

</details>

<details>
<summary><strong>Step 4: Database Setup</strong></summary>

```bash
# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# (Optional) Seed database
npx prisma db seed
```

</details>

<details>
<summary><strong>Step 5: Run Application</strong></summary>

```bash
# 🛠️ Development mode
npm run dev

# 🏗️ Build for production
npm run build

# 🚀 Start production server
npm start
```

**🎉 Success!** Navigate to [http://localhost:3000](http://localhost:3000)

</details>

---

## 📂 Project Structure

```
car-market-place/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 (admin)/           # 🛡️ Protected admin routes
│   ├── 📁 (auth)/            # 🔐 Authentication pages
│   ├── 📁 cars/              # 🚗 Car listing pages
│   ├── 📁 api/               # 🔌 API endpoints
│   └── 📄 layout.js          # 🎨 Root layout
├── 📁 components/            # 🧩 Reusable components
│   ├── 📁 ui/               # 🎛️ shadcn/ui components
│   └── 📄 header.jsx        # 📱 Navigation header
├── 📁 lib/                  # 🛠️ Utility functions
├── 📁 prisma/               # 🗄️ Database schema
├── 📁 public/               # 🖼️ Static assets
└── 📁 actions/              # ⚡ Server actions
```

---

## ⚙️ Available Commands

| Command | Description | Usage |
|---------|-------------|--------|
| 🛠️ `npm run dev` | Start development server | Local development |
| 🏗️ `npm run build` | Create production build | Before deployment |
| 🚀 `npm start` | Start production server | Production environment |
| 🔍 `npm run lint` | Run ESLint checks | Code quality |
| 🗄️ `npx prisma studio` | Open database browser | Database management |

---

## 🌐 Application Routes

<table>
<tr>
<td width="50%">

### **🏠 Public Routes**
- `/` - Home & search
- `/cars` - Browse listings  
- `/cars/[id]` - Car details
- `/waitlist` - Join waitlist
- `/sign-in` - User login
- `/sign-up` - User registration

</td>
<td width="50%">

### **🔒 Protected Routes**
- `/saved-cars` - User favorites
- `/reservations` - User bookings
- `/test-drive/[id]` - Test drive booking
- `/admin` - Admin dashboard
- `/admin/cars` - Manage listings
- `/admin/test-drives` - Manage bookings

</td>
</tr>
</table>

---

## 🚀 Deployment

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Arth9vansola/carMarketPlace_ai)

<details>
<summary><strong>Manual Deployment Steps</strong></summary>

1. **Fork** the repository
2. **Connect** to Vercel
3. **Add** environment variables
4. **Deploy** 🚀

**Environment Variables Required:**
- All variables from your `.env` file
- Set `NODE_ENV=production`

</details>

### **Alternative Platforms**
- 🟢 **Netlify** - Full support
- 🟢 **Railway** - Database + hosting
- 🟢 **DigitalOcean** - App Platform

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

<details>
<summary><strong>Contribution Guidelines</strong></summary>

### **🔄 Workflow**
1. **Fork** the repository
2. **Create** feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### **📝 Code Standards**
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### **🐛 Bug Reports**
Use GitHub Issues with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

</details>

---

## 📄 License

<div align="center">

**🔒 Proprietary & Confidential**

© 2025 motionGo. All Rights Reserved.

*This project is private and proprietary.*

---

<sub>Built with ❤️ using Next.js 15 and modern web technologies</sub>

</div>
