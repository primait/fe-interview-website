# Frontend Interview - Website

Hey 👋

This is a Next.js project created for the home test. The repository contains:

- `Next.js` 16 with App Router & Turbopack
- `React` 19
- `TypeScript`
- `Vitest` for testing
- `Biome` for linting and formatting

## Install and run

```bash
# Install dependencies
# This project uses `pnpm` as package manager, but you can also use `npm` or `yarn`.
pnpm install

# Run the development server
pnpm dev

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Check code quality
pnpm check

# Fix code issues
pnpm check:fix

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Badge/
│   ├── Button/
│   ├── FiltersBar/
│   ├── Header/
│   └── SearchBar/
└── setupTests.ts       # Test setup
```

## Testing

This project uses Vitest with React Testing Library. Tests are located next to their components with the `.test.tsx` extension.

## Figma file

The Figma file for the home test is available [here](https://www.figma.com/design/ESP3mNtKRj1aI458c08QBb/%F0%9F%92%BB-Website-Home-Test?node-id=0-1&t=tmrCaYq4wADJCHvD-1).
