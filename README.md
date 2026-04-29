# Companies Directory

A responsive React + Tailwind app for browsing Indian companies with search, location and industry filtering, sorting, pagination, and graceful image fallback.

## Features

- Search companies by name
- Filter by location and industry
- Sort company names ascending or descending
- Pagination with 5 companies per page
- Image fallback to industry graphics when a company image fails to load
- Clean product-directory UI with a polished filter panel

## Stack

- React 18
- Vite
- Tailwind CSS
- Local JSON mock data

## Installation

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run start
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

## Project structure

- `src/App.jsx` — main app layout, filters, data loading, and pagination
- `src/components/Filters.jsx` — filter controls, sort dropdown, and reset button
- `src/components/CompanyCard.jsx` — company card layout with image fallback
- `src/components/Pagination.jsx` — pagination navigation
- `src/components/IndustryGraphic.jsx` — fallback SVG graphics by industry
- `src/data/companies.json` — local mock company dataset

## Notes

- Filters are generated dynamically from the dataset to ensure dropdown values match available companies.
- `clearFilters()` resets search, location, industry, and sort order.
- If an image URL fails, the app displays an industry-specific graphic instead.

## Usage

- Use the search box to find companies by name.
- Select a location or industry from the dropdowns to narrow results.
- Change the sort order to reorder the visible companies.
- Use pagination controls to navigate pages.
- Click `Reset filters` to return to the full company list.
