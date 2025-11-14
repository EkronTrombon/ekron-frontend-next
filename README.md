# Ekron Frontend

Welcome to the official repository for the Ekron frontend. This project is a modern web application built with Next.js, React, and styled with Tailwind CSS, providing a robust foundation for a fast and scalable user experience.

## 📋 Table of Contents

- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [🛠️ Tech Stack](#-tech-stack)
- [📜 Available Scripts](#-available-scripts)
- [🎨 Styling](#-styling)
- [Linting and Code Quality](#linting-and-code-quality)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Before you begin, ensure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (v18.18.0 or later is recommended)
*   A package manager like [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/EkronTrombon/ekron-frontend-next
    cd ekron-frontend
    ```

2.  **Install dependencies:**

    Choose your preferred package manager to install the project dependencies.

    ```bash
    npm install
    ```

    or

    ```bash
    yarn install
    ```

    or

    ```bash
    pnpm install
    ```

### Running the Development Server

To start the application in development mode, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page will auto-update as you make edits.

## 🛠️ Tech Stack

This project is built with a modern technology stack:

*   **[Next.js](https://nextjs.org/)**: A React framework for building server-side rendered and static web applications.
*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
*   **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **[ESLint](https://eslint.org/)**: A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.

## 📜 Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`: Starts the development server.
*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts the production server after a build.
*   `npm run lint`: Runs ESLint to analyze the code for potential errors and style issues.

## 🎨 Styling

The project uses **Tailwind CSS** for styling. Global styles and Tailwind directives are defined in `app/globals.css`. Custom utility classes and component styles are also located in this file. The color palette and fonts are configured as CSS variables for easy theming and consistency.

## Linting and Code Quality

We use **ESLint** to enforce code quality and a consistent coding style. To check your code against the defined rules, run `npm run lint`. It is highly recommended to run this command before committing your changes.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details on how to deploy to other platforms.

## 🤝 Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request if you have a way to improve this project.