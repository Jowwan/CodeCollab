# [CodeCollab](https://codecollab-jowan.vercel.app/)

CodeCollab is a dynamic platform for developers to connect, collaborate, and showcase their work. Built with **Next.js** and **Supabase**, CodeCollab provides seamless OAuth login and real-time communication features.

## Features

- **OAuth Login**  
  Users can log in securely with:
  - Google
  - Discord
  - GitHub

- **Live Chat**  
  Engage in real-time conversations with other developers.

- **Project Sharing**  
  Share your projects as posts, complete with descriptions and links, visible to all users on the platform.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Supabase](https://supabase.com/) (for authentication, database, and real-time chat functionality)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (optional, if used)

## Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Jowwan/CodeCollab.git
   cd CodeCollab
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. **Run the development server**  
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## How to Use

1. Sign in using your preferred OAuth provider (Google, Discord, or GitHub).
2. Explore the live chat feature to connect with other developers.
3. Share your projects by creating posts that include descriptions, links, and other details.

---

**Start connecting, sharing, and collaborating with CodeCollab! 🚀**
