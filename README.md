# CITY BIKE APP FRONTEND 

This is the frontend of City Bike App. It displays bike journeys and bike station information for Helsinki, Finland. Initially the app contains only the data which has been imported from [HSL Open Data](https://data.hsl.fi/datasets/hsl-open-data/) for bike journeys that have been made from May 2021 to July 2021, which is roughly 3 million individual journeys. There is option to add more journeys to the application. The app also contain information about all the bike stations in Helsinki. The data for station has been imported from [HSL](https://www.hsl.fi/en/hsl/open-data) too. In the app there is option to add more stations to the application. The app display average distance and average time for journeys made from the station, made to the station, total number of journey made from the station and total number of journey made to the station. It also display the top 5 most popular destinations for journeys made from the station and top 5 most popular starting station for journeys made to the station. It also shows the location of the station in the map. The backend of the app can be found [here](https://github.com/shamsch/city-bike-app-backend).

**HUOM! Because the app is hosted on free version of Heroku, it goes to sleep after a certain time, so when opening/sending request for the first time, it takes roughly another extra half a minute for it to spin up. Please wait while it does that.**
# TECHNOLOGIES USED

- [React](https://reactjs.org/) - Frontend
- [TypeScript](https://www.typescriptlang.org/) - Statically typed JavaScript
- [Formik](https://formik.org/) - Form management
- [Style Components](https://stylecomponents.dev/) - Styling library
- [Axios](https://axios-http.com/docs/intro) - HTTP requests management library
- [React-Router](https://react-router.js.org/) - Routing library
- [Zustand](https://zustand.js.org/) - State management library for sharing data between components
- [Jest](https://jestjs.io/) - Testing framework
- [Cypress](https://www.cypress.io/) - End-to-end testing framework
- [Git](https://git-scm.com/) - Version control system

# DEVELOPMENT WORKFLOW

A short description of the structure of the project and the steps involved in the development process can be found is below:

## Project structure

A general overview of how the project is structured is as follows:

```
├── src
│   ├── components
│   │   ├── AddForm
│   │       ├── AddForm.tsx
│   │       └── AddForm.styled.ts
│   │   ................
│   ├── pages
│   │   ├── Home.tsx
│   │   ................
│   ├── store
│   │   ├── store.ts
│   │   ................
│   └── types
│   │   ├── index.ts
│   │   ................
│   └── utils
│   │   ├── color.ts
│   │   ................
│   └── App.tsx
│   └── globalStyles.ts
│   └── index.ts
│   └── router.ts
|── .env
├── package.json
├── README.md
├── tsconfig.json
├── package-lock.json
├── public
```

## Workflow

The development workflow is as follows:

1. Initial project setup.
2. Planning.
3. Creating GitHub Issues for the feature.
4. Track progress in Github Projects.
5. Close the issues when the feature is implemented.
6. Write tests for the feature.
7. Deploy the feature to production.

I repeated step 2 to 7 for each feature, with the exception of step 6, which has been done at the end.

# TESTING

Unit testing has been done using [Jest](https://jestjs.io/) and React testing library [react-testing-library](https://testing-library.com/docs/react-testing-library/intro). E2E testing has been done using [cypress](https://www.cypress.io/).

## Unit Testing

All unit test files are located in the [tests](src/__test__) folder.

### How to run unit tests

To run all unit tests, run the following command in the terminal:

```bash
npm run test
```

### What tests has been implemented?

All the components in the [src/components](src/components) folder have been tested except for [AddJourney.tsx](src\components\AddForm\AddJourney.tsx) and [AddStation.tsx](src\components\AddForm\AddStation.tsx). These components have side effects and since E2E testing is also implemented, they are not tested with unit tests. In the unit tests, the functionality and the UI renders of the components are tested.

## E2E Testing

E2E testing using cypress plan has been cancelled due to lack of time.

# BUGS

- Directly opening `/jounreys` in the browser will not have the dynamically fetched max values for duration and distance in the slider. [Issue#14](https://github.com/shamsch/city-bike-app-frontend/issues/14)

# Live Deployment on Netlify

Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/0bad9f2a-264e-4f4b-b989-ddb55c54abfb/deploy-status)](https://app.netlify.com/sites/city-bike-app/deploys)

Link: [City Bike App](https://city-bike-app.netlify.com/)
