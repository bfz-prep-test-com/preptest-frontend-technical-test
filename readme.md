// Write a readme for PREPTEST FRONTEND TECHNICAL TEST

# PREPTEST FRONTEND TECHNICAL TEST

This is a technical test for frontend developer position at PREPTEST.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you start, make sure you have installed the following software on your computer:

- [NodeJS](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)
- [Git](https://git-scm.com/downloads)
- [Visual Studio Code](https://code.visualstudio.com/download)

### Installing

First, clone this repository into your computer:

```bash
git clone https://github.com/bfz-prep-test-com/preptest-frontend-technical-test
```

Then, install yarn v1.22.10:

```bash
npm install --global yarn@1.22.10
```

Then, install all dependencies:

```bash
yarn
```

### Running

To run this project, run the following command:

```bash
yarn dev
```

## Built With

- [NextJS](https://nextjs.org/) - The React Framework for Production
- [Material UI](https://material-ui.com/) - React components for faster and easier web development

## Testing

- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Simple and complete React DOM testing utilities that encourage good testing practices
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser

### How to write test

#### Unit Test

Unit test is written using **Jest** and **React Testing Library**. To write unit test, create a file with the same name as the file you want to test, but with `.test.ts` or `.test.tsx` extension. For example, if you want to test `src/components/HelloWorld.tsx`, create a file named `src/components/HelloWorld.test.tsx`.

#### E2E (End to End) Test - RECOMMENDED

E2E test is written using **Cypress**. To write E2E test, create the files with the same folder structure in **cypress** folder at the root of the project. For example, if you want to test `src/pages/index.tsx`, create a file named `cypress/e2e/pages/index.cy.ts`.

