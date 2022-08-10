# PROJECT IN PROGRESS

The README.md file will be ready shortly (before 14th August 2022).

# TECHNOLOGIES USED

TO BE ADDED

# DEVELOPMENT WORKFLOW

TO BE ADDED

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

TO BE ADDED

# BUGS

- Directly opening `/jounreys` in the browser will not have the dynamically fetched max values for duration and distance in the slider. [Issue#14](https://github.com/shamsch/city-bike-app-frontend/issues/14)

# Live Deployment on Netlify

Status: [![Netlify Status](https://api.netlify.com/api/v1/badges/0bad9f2a-264e-4f4b-b989-ddb55c54abfb/deploy-status)](https://app.netlify.com/sites/city-bike-app/deploys)

Link: [City Bike App](https://city-bike-app.netlify.com/)
