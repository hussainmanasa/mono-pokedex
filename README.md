# Monorepo - Pokedex

## Overview

- Pokedex is a project made using mono-repo concept. It includes 3 different codebases, 2 packages named components and utils where you store any reusable code and 1 project called pokedex which includes tha main functionality.

- To achieve mono-repo we have implemented Lerna Js which is the original monorepo tool for TypeScript/JavaScript. It has been around for many years and is used by tens of thousands of projects, including React and Jest.

- The main Pokedex codebase is written using Next Js which is React Based framework with server side rendering capability. It is very fast and SEO friendly. Using Next.js, you can create robust react based application quite easily and test them.

## Code Scripts

### Create Development Environment

Use template strings, object destructuring, arrow functions, Interfaces, JSX syntax and more.

```bash
// clone the application
$ git clone https://github.com/hussainmanasa/mono-pokedex.git
```

#### Install The Dependencies

```bash
// Install the required npm modules
$ npm run bootstrap
```

#### Running the app in development

```bash
$ npm run dev-pokedex

```

#### Running the app for production

```bash
# Build creation
$ npm run build-pokedex

# Production mode
$ npm run prod-pokedex
```

#### Running the app using docker

```bash
# 1: Building image from base folder
$ docker build .

# 2: Runnnig the image
$ docker run -d -p exposedPort:containerPort <imageId>
```

#### Test

For testing purposes we have used [Jest](https://facebook.github.io/jest/).

```bash
# To execute test cases
$ npm run test-pokedex

```
