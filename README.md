# Cuddles Childminders & Schools

<p align="center">
  <strong>A modern, responsive school website built for Cuddles Childminders & Schools.</strong>
</p>

<p align="center">
  A polished React-powered web experience designed to present the school, its learning environment, achievements, admissions information, events, gallery, innovation initiatives, and community life.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react\&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite\&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?logo=reactrouter\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-Responsive-1572B6?logo=css3\&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub_Pages-222222?logo=github\&logoColor=white)

</p>

---

## 🌱 About the Project

**CCMS Web** is the official web experience for **Cuddles Childminders & Schools**.

The website brings the school's identity, programmes, learning philosophy, admissions information, community activities, achievements, events, gallery, and contact pathways into one accessible digital platform.

The goal is simple:

> **Creatively developing a whole child.**

The website is designed to feel warm, modern, trustworthy, and welcoming while remaining fast, responsive, accessible, and easy to maintain.

---

## ✨ What the Website Does

The application provides dedicated experiences for:

* 🏫 About Cuddles
* 📚 Learning
* 👩‍🏫 Leadership
* 🧒 Cuddles Childminders School
* 🏛️ The Cuddles Hall
* 🌱 Life at Cuddles
* 💡 Innovation
* 🏆 Achievements
* 📅 Events
* 🖼️ Gallery
* 🎓 Admissions
* 📞 Contact

The navigation is structured around the way prospective parents, existing families, students, and visitors naturally explore a school website.

---

## 🧱 Technology Stack

### Frontend

| Technology       | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| **React**        | Component-based user interface                         |
| **TypeScript**   | Type-safe application development                      |
| **Vite**         | Development server and production build tooling        |
| **React Router** | Client-side routing                                    |
| **CSS3**         | Responsive styling, animations and visual presentation |

### Development

| Tool               | Purpose                           |
| ------------------ | --------------------------------- |
| **Node.js**        | JavaScript runtime                |
| **npm**            | Dependency and package management |
| **Git**            | Version control                   |
| **GitHub**         | Repository and collaboration      |
| **GitHub Actions** | Automated deployment workflow     |
| **GitHub Pages**   | Production hosting                |

---

## 🏗️ Application Architecture

The application follows a lightweight component-driven React architecture.

```text
                    ┌──────────────────────┐
                    │      Visitor         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     React Router     │
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌───────────┐    ┌───────────┐    ┌───────────┐
        │   Pages   │    │   Data    │    │   Assets  │
        │           │    │           │    │           │
        │ Home      │    │ Site Data │    │ Images    │
        │ About     │    │ Images    │    │ Logos     │
        │ Learning  │    │ Content   │    │ Media     │
        │ Admissions│    │           │    │           │
        │ Gallery   │    │           │    │           │
        │ Events    │    │           │    │           │
        └─────┬─────┘    └─────┬─────┘    └─────┬─────┘
              │                │                │
              └────────────────┼────────────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │     CSS / UI Layer   │
                    │                      │
                    │ Responsive Design    │
                    │ Animations            │
                    │ Interactions          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Production Build   │
                    │        Vite          │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    GitHub Pages      │
                    └──────────────────────┘
```

---

## 🗂️ Project Structure

```text
ccms-web/
│
├── public/
│   └── images/
│       └── ...
│
├── src/
│   │
│   ├── data/
│   │   ├── images.ts
│   │   └── siteData.ts
│   │
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AchievementsPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── ChildmindersPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── EventsPage.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── InnovationPage.tsx
│   │   ├── LeadershipPage.tsx
│   │   ├── LearningPage.tsx
│   │   ├── LifeAtCuddlesPage.tsx
│   │   └── TheCuddlesHallPage.tsx
│   │
│   ├── seo/
│   │   └── seo.tsx
│   │
│   ├── styles/
│   │   └── App.css
│   │
│   ├── utils/
│   │   └── assets.ts
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🔄 How the Application Flows

### 1. Application Entry

The application starts through the React entry point and mounts the main application.

### 2. Routing

`React Router` handles navigation between the different sections of the website.

Routes include:

```text
/
├── /about
├── /learning
├── /childminders
├── /the-cuddles-hall
├── /life-at-cuddles
├── /achievements
├── /innovation
├── /events
├── /gallery
├── /leadership
├── /admissions
└── /contact
```

### 3. Content Layer

School information and image references are separated into dedicated data modules.

This makes it easier to update content without unnecessarily restructuring page components.

### 4. Asset Handling

The project includes a small asset utility responsible for resolving image paths correctly across different deployment environments.

This is particularly important because the production site is hosted under a GitHub Pages subpath.

### 5. Presentation Layer

The application uses a centralized CSS layer for:

* Responsive layouts
* Navigation
* Cards
* Typography
* Buttons
* Hero sections
* Galleries
* Transitions
* Scroll-based visual effects
* Mobile navigation
* Interactive states

---

## 📱 Responsive Experience

The website is designed for multiple screen sizes:

```text
Desktop
   ↓
Laptop / Tablet
   ↓
Mobile
```

Navigation automatically adapts to smaller screens through a dedicated mobile menu.

The visual system also uses responsive layouts to maintain usability across different viewport sizes.

---

## 🎨 Interaction & Motion

The interface uses subtle motion to make the experience feel more alive without overwhelming the visitor.

Examples include:

* Scroll reveal animations
* Header state transitions
* Smooth navigation
* Mobile menu transitions
* Interactive navigation states
* Hover interactions
* Progressive visual reveals

The goal is **elegant motion rather than excessive animation**.

---

## 🔎 SEO

SEO is treated as part of the application rather than an afterthought.

The project includes a dedicated SEO layer for managing page metadata and improving how individual pages are presented to search engines.

The site structure also provides clear routes and meaningful page content for:

* Parents searching for schools
* Prospective families
* Admissions enquiries
* School programmes
* Events
* Educational activities
* Cuddles Childminders & Schools information

---

## 🚀 Deployment

The project is deployed through **GitHub Pages**.

The deployment flow is:

```text
Developer
    │
    ▼
Git Commit
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions
    │
    ├── Install dependencies
    ├── TypeScript validation
    ├── Vite production build
    └── Deploy
          │
          ▼
     GitHub Pages
```

The production build is generated using:

```bash
npm run build
```

The project must successfully pass the TypeScript build and Vite production build before deployment.

---

## 🛠️ Local Development

Clone the repository:

```bash
git clone https://github.com/alhemdrew/ccms-web.git
cd ccms-web
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🧪 Build Verification

The production application is validated through the standard Vite build pipeline:

```text
TypeScript
    ↓
tsc -b
    ↓
Vite
    ↓
Production bundle
    ↓
dist/
```

A successful build confirms that the application can be compiled into a production-ready bundle.

---

## 📌 Deployment Considerations

Because the site can be served from the GitHub Pages project path:

```text
/ccms-web/
```

the application includes deployment-aware asset handling.

This prevents common problems where images, stylesheets, or other static assets work locally but fail after deployment.

The application also detects the GitHub Pages base path when initializing client-side routing.

---

## 🌐 Project Status

**Status: Active**

The CCMS website is actively developed and maintained.

Future improvements may include:

* Expanded SEO and structured data
* Improved accessibility auditing
* Performance optimization
* More interactive school content
* Enhanced admissions workflows
* Additional media and gallery capabilities
* Content management improvements
* Analytics and conversion tracking

---

## 👨‍💻 Author

**Andrew Moses**

Software Developer · Cybersecurity Practitioner · Educator

Built and maintained as part of the digital presence of **Cuddles Childminders & Schools**.

---

## 📄 License

This repository contains the website implementation and materials created for Cuddles Childminders & Schools.

Unless otherwise stated, the school's branding, imagery, written content, and other proprietary materials remain the property of their respective owners.

---

<p align="center">
  <strong>Cuddles Childminders & Schools</strong>
  <br />
  Creatively developing a whole child.
</p>
