## Project

- ✅ Typescript
- ✅ Unit tests
- ✅ End-to-end tests
- ✅ Mobile friendly
- ✅ Deployment on Vercel
- ✅ Docker and Git workflow sample

## Techs

- [TypeScript](https://www.typescriptlang.org/)
- [Scss](https://sass-lang.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Plop](https://plopjs.com/documentation/)

## Access

Access the deployed application using the link below and see the website in action:
```bash
aquazonia.vercel.app
```

## Getting Started

First, clone the repository and install the dependencies using the yarn command. Then, run:

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser and see the result.

## Commands

- dev: runs the application on localhost:3000 in development mode
- start: runs the application on localhost:3000
- build: creates the production build version
- lint: runs the linter on all components and pages
- test: runs Jest for tests on all components and pages
- storybook: starts Storybook on localhost:6006
- cy:open: starts Cypress, need to have the application running in localhost:3000
- generate: generate automatically a folder containing all files for a react component

## Automating Workflow with Prettier, ESLint, Plop and Husky + Lint Staged

**Prettier** is a code formatter that helps ensure that my code follows consistent and readable formatting. Prettier is integrated into the workflow so that it runs automatically whenever I save a file, ensuring that code is always clean and consistent.

**ESLint** is a static code analysis tool that helps to identify potential errors and coding inconsistencies. By configuring ESLint, we ensure that the code meets the coding standards and best practices set inside the project.

**Plop** automatizes the generation of files for components. With Plop, we can created templates that generate all the files we need for each new component, including the index file, test file, storybook file, and scss module styles. This saves a lot of time and eliminated the need to manually create each file.

**Lint Staged and Husky** Linting and testing are important parts of any development process, as they help to catch potential errors and ensure code quality. However, it can be easy to forget to run these checks before committing code. To solve this problem, it was integrated Lint Staged with Husky, which ensures that all lints and tests are run before every commit. If something breaks, it won't allow you to make the commit until the issues are fixed. Additionally, it was configured the link to max-warning=0, which enforces the rule that any variable or import must be used, ensuring that the codebase remains clean and organized.

## SCSS Modules

In the project, the decision was made to use SCSS modules instead of Styled Components. This choice was motivated by the performance benefits that SCSS modules offer, especially in applications that need to scale. Additionally, SCSS modules allow for greater control over the naming of CSS classes, making it easier to debug and maintain the code in the long term. These factors made SCSS modules the better choice for the project's needs.


## Responsiveness

![main-header](https://user-images.githubusercontent.com/81202572/226264519-95f37842-2741-4c30-8d8a-a568236f3bb1.gif)
![text-with-image-aquazonia](https://user-images.githubusercontent.com/81202572/226264566-087851ea-d538-4515-bf66-1f5d8f089a21.gif)
![text-capitular-aquazonia](https://user-images.githubusercontent.com/81202572/226264618-0cf4fa9f-796e-4b84-8f09-2dc55c96b3f4.gif)



## Animations

![scroll-animation](https://user-images.githubusercontent.com/81202572/226265222-4981317c-8a5a-4127-97d7-8f766bf87f72.gif)
![scroll-open-menu-desktop](https://user-images.githubusercontent.com/81202572/226265237-a5bf47aa-8c66-49b9-976e-df78fecb3c1b.gif)
![scroll-open-menu-mobile](https://user-images.githubusercontent.com/81202572/226265349-ced848ee-5392-4f82-ae87-37d3c86e3e12.gif)


## Unit tests

![Captura de tela 2023-03-20 034342](https://user-images.githubusercontent.com/81202572/226266081-674c5269-be9a-42fa-95bd-992a721a4a4b.png)

- Jest + React Test Library
- Almost 100% of unit test coverage
- Component creation using TDD
- More than 50 unit tests written

## E2E tests

![test-cypress](https://user-images.githubusercontent.com/81202572/226267107-052b2a26-e86c-4f4a-ab8c-98458d9181de.gif)

- Cypress
- Integrating Cypress + TypeScript
- Integrating Cypress + ESLint

## Docker and Git workflow sample

![docker-build](https://user-images.githubusercontent.com/81202572/226268386-0ef60eba-560f-4e91-8e37-588c5388c73b.gif)


- Inside branch docker-github-flow
- Build the Docker image
- Workflow for Continuous Integration (CI). This workflow is triggered whenever a pull request is opened or updated. When a pull request is opened or updated, GitHub automatically runs the workflow defined in the ci.yml file.

## Extra feature: Storybook

![storyvbook-example](https://user-images.githubusercontent.com/81202572/226268422-8c493715-c1ec-4cca-b8c0-29ac6e0e26c5.gif)

- Storybook is a powerful tool for developing and testing React components in isolation. It allows developers to create and showcase UI components in a clean, organized and easy-to-use interface, which helps in both maintaining and scaling a project. By showcasing components in isolation, developers can easily identify potential issues and work out the kinks before integrating components into the larger application.

- In addition to being a valuable testing tool, Storybook can also be used as a collaborative space for teams to showcase, discuss and iterate on components. By providing an interactive, visual interface for components, designers and developers can easily collaborate and ensure that components align with the design system.

- Using Storybook in a React project can ultimately save time and resources by streamlining the development process, improving the quality of the codebase, and facilitating collaboration between team members. It is a powerful tool that can help create better, more organized components and applications.
