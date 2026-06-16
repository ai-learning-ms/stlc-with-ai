# Playwright (TypeScript) E2E Tests

This repo contains a minimal Playwright + TypeScript setup and an example E2E test targeting https://www.epam.com.

## Prerequisites

- Node.js 18+ (recommended: latest LTS)

## Install

```bash
npm ci
```

Install Playwright browsers (first time only):

```bash
npx playwright install
```

## Run tests

Run all tests (headless):

```bash
npm test
```

Run headed:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npm run test:report
```

## Notes

- Base URL is configured in `playwright.config.ts` as `https://www.epam.com`, so tests can use `page.goto('/')`.
- The EPAM site may show a cookie consent banner (OneTrust). The test handles it when present.
