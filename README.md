# SAAS Lending Website

Development a landing page that provides information about SaaS technologies requires a deep understanding of web development and design.

## Tech Stack

**backend**:

- [Next.js](https://nextjs.org/) (Framework)
- [Prisma](https://www.prisma.io/) (ORM)
- [MongoDB](https://www.mongodb.com/) (Database)

**frontend**:

- [Tailwind CSS](https://tailwindcss.com/) (Styling)
- [Frameer Motion](https://www.framer.com/motion/) (Animation)

## Getting Started

> Make sure you have [Node.js](https://nodejs.org/en) installed on your machine

1. Install Dependencies `npm install`
2. Environment variables: `touch .env.local`

   ```bash
   DATABASE_URL="mongodb://<user>:<password>@localhost:<port>/<database>"
   ```

3. Database Setup: See Database Setup
4. Start Developing: `npm run dev`

## Database Setup

> Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your machine

1. Launches services in background with `docker-compose.yml` - `docker-compose up -d`
2. Opens interactive shell in Docker container `docker exec -it mongodb_saas_lending_container bash`
3. Displays MongoDB server version accurately `mongod --version`
4. Connects to MongoDB using root credentials `mongosh -u <user> -p <password>`
5. Create basedata `d`
