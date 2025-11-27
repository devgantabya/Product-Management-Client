# ItemFlow

**URL:** [https://product-management-client-fyp4.vercel.app/](https://product-management-client-fyp4.vercel.app/)

---

## Project Description

**ItemFlow** is a modern product management web application built with **Next.js**, **React**, and **Firebase Authentication**. The platform allows users to:

- Register and log in using email/password or Google authentication.
- Manage personal products and track inventory.
- Explore products in a user-friendly interface.
- Receive real-time feedback via notifications.

The app is designed for simplicity and speed, leveraging **Next.js App Router**, **DaisyUI**, and **TailwindCSS** for a responsive, modern UI.

---

## Setup & Installation

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x
- A Firebase project with authentication enabled

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/devgantabya/Product-Management-Client.git
cd Product-Management-Client
```

2. **Install dependencies**

```bash
npm install
```

3. **Setup environment variables**

Create a .env.local file in the root folder:

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

4. **Run the development server**

```bash
npm run dev
```

Open http://localhost:3000 to view the app locally.

5. **Build for production**

```bash
npm run build
npm start
```
