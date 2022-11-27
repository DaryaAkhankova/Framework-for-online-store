# Getting started 
npm init

# Get started by installing Playwright using npm or yarn
npm init playwright@latest
yarn create playwright

# Running all tests
npx playwright test

# Running a single test file
npx playwright test navigation.spec.ts - any test from the tests root can be selected

# Running tests without parallelism and using only 1 worker
npx playwright test --workers=1

# To open last HTML report run
npx playwright show-report





