# Weebflix

![weebflix](https://github.com/irxd/weebflix/blob/main/public/logo.png?raw=true)

Weebflix is an anime finder using https://docs.api.jikan.moe/.

Logo generated via https://fontmeme.com/netflix-font/

## Libs

- Next.js 14 Pages Router
- Material UI
- Zustand
- SWR
- Jest
- React Testing Library

## Structure

    .
    ├── ...
    ├── src
    │   ├── components          # Shared components
    │   ├── hooks               # Hooks files
    │   ├── pages               # Pages
    │   ├── stores              # Store files
    │   ├── styles              # Style file
    │   ├── tests               # Unit tests
    │   └── types               # Type definitions
    └── ...

## Features

- Browse Anime
- Search Anime
- Add to Favorites (clear on refresh page)
- Remove from Favorites
- Responsive

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
