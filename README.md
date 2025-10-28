# Chromezy - Landing Page Showcase

This project is a responsive landing page for a modern tech company, built with Next.js and TypeScript. It features a parallax scrolling effect and showcases the company's services, client feedback, success stories, and technologies.

## Design Reference

The UI/UX design for this application can be found on Figma:
[Parallax Scroll | Full Landing Page Showcase](https://www.figma.com/design/GQDJl7HXZ4hohNj15HE5hN/Parallax-Scroll--Full-Landing-Page-Showcase--Community-?node-id=2014-10769&t=1oN0lRLAegrV6xV8-0)

## Folder Structure

The project follows a standard Next.js structure:

```
.
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   └── app/             # Main application source code
│       ├── components/  # Reusable React components
│       ├── content/     # Content for the components
│       ├── app.css      # Global styles
│       ├── layout.tsx   # Main layout component
│       └── page.tsx     # The main landing page
├── .gitignore           # Files to be ignored by Git
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone <repository-url>
    ```
2.  Navigate to the project directory
    ```sh
    cd pre_training_chromezy_app_nextjs
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```

### Running the Application

To run the application in development mode, use the following command. This will start the development server on `http://localhost:3000`.

```sh
npm run dev
```

## Building for Production

To build the application for production, use the following command:

```sh
npm run build
```

This will create an optimized production build of the application.

To run the production build locally, use:

```sh
npm run start
```

## Linting and Formatting

This project uses ESLint and Prettier for code quality and consistency.

To check for linting errors:

```sh
npm run lint
```

To automatically fix linting and formatting issues:

```sh
npm run format
```
