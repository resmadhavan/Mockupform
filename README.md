# Mockup Form Builder

A React-based form builder application with dashboard, form builder, and preview functionality.

## Features

- Form dashboard with form management
- Drag-and-drop form builder
- Live form preview
- Form submissions viewer
- Public form view

## Tech Stack

- React 18
- React Router v6
- React Bootstrap
- Lucide React (Icons)
- Vite
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── Mockupform/
│   └── Pages/
│       ├── FormMockup.jsx   # Main form builder component
│       ├── Preview.jsx      # Preview component
│       └── FormBuilder.css  # Form builder styles
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
└── package.json             # Dependencies

```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Routes

- `/` - Form Mockup (Dashboard/Builder)
- `/preview` - Preview page

## License

MIT

