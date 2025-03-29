# Betting App Demo

A modern web application for sports betting, odds viewing, and contest participation.

## Prerequisites

```
node v18+
```

## How to run

```bash
git clone https://github.com/HarshalGunjalOp/betting-app-demo.git
cd betting-app-demo
npm install 
npm run dev
```

## Project Overview

This is a Next.js-based betting application that allows users to:
- View odds for various sports (NFL, NBA, NCAAB, etc.)
- Place bets on upcoming sports events
- Participate in contests
- Track their picks and manage their wallet

## Project Structure

- `/app`: Contains the main application pages and routing
  - Various sport-specific sections (NFL, NBA, NCAAB)
  - User account management (login, register, wallet)
  - Event and contest listings
- `/components`: Reusable UI components
  - Sport-specific odds displays
  - User interface elements
  - Forms and interactive elements
- `/public`: Static assets
- `/lib`: Utility functions and shared code
- `/hooks`: Custom React hooks

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

## Features

- Real-time sports odds tracking
- User authentication and account management
- Sports betting functionality
- Contest participation
- Wallet management
- Mobile-responsive design

## Development

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project can be deployed to Vercel or other platforms that support Next.js applications.

```bash
npm run build
```

## License

[MIT](LICENSE)
