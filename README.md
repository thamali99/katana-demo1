# katana-demo1
Demo for Katana Organization


**System under test** (SUT) :(https://katanamrp.com/)

## Prerequisites

- [Node.js](https://nodejs.org/)
- [git](https://git-scm.com/)

## Getting Started

To install NPM dependencies

```bash
npm install
```

To open Cypress test runner

```bash
npm run cy:open
```

To run test in CLI

```bash
npm run cy:run

## Folder structure

- [fixtures](fixtures) holds optional JSON data for mocking, [read more](https://docs.cypress.io/api/commands/fixture)

- [plugins](plugins) allow you to customize how tests are loaded, [read more](https://docs.cypress.io/plugins/index)

- [reports](reports) holds the test report in html format based on [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter).

  JUnit-style XML test results will be generated as well based on [JUnit Reporter for Mocha](https://www.npmjs.com/package/mocha-junit-reporter)

  The screenshots will be attached into the html test report automatically.

  All the reports will be generated when the test is running on CLI.
```
