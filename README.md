This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

This project is an implementation of a product detail page and shopping cart with a specific focus on component reusability and user interaction.

## Technical Stack & Decisions

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand
  - Reason: Lightweight, persistent storage for cart, great TypeScript support and used by 29cm.
- **Image Handling**: Next.js Image component with proper optimization
- **Package Manager**: NPM

## Core Features Checklist

### Product Page

- **Image Carousel**
  - 1:1 aspect ratio
  - Swipe support
  - Left/right navigation buttons
  - Mobile responsive

- **Product Options**
  - Size selection
    - Options: "L - 대형", "M - 중형", "S - 소형"
    - Handle sold out state for L-Black combination
  - Color selection
    - Options: "Teal", "Black", "White"
    - Conditional sold out state
  - Additional Options
  - Button state management
    - Disable when required options not selected
    - Disable for sold out combinations

### Cart Page

- **Header Controls**
  - Select all functionality
  - Indeterminate state handling
  - Bulk delete option

- **Cart Items**
  - Individual item selection
  - Price display
  - Option display
  - Delete functionality
  - Quantity management

- **Summary Section**

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
