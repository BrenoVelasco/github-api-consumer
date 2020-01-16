# GitHub API Consumer

This project was created with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find useful information about the project's structures and main functionalities.

## About

`github-api-consumer` is a Single-Page Application (SPA) that consumes GitHub open users API and returns a list of users within the filled query. It is fast, responsive, simple and beautiful =)

## Features

- Returns GitHub users under the given conditions
- Detailed information per user
- Language change (portuguese - english)
- "Economy in requests" - only makes requests if data was not already fetched
- Dockerized - use in any machine that supports Docker

## Folder Structure

```
github-api-consumer/
  node_modules/
  public/
  src/
    components/
    constants/
    containers/
    styles/
    theme/
    utils/
    ApplicationContainer.jsx
    ApplicationProvider.jsx
    ApplicationStyle.jsx
    index.js
    ...
  .env
  .prettierrc
  .travis.yml
  docker-compose.yml
  Dockerfile.dev
  package.json
  README.md

```

#### ApplicationProvider.jsx

Handles global state (Redux-like) using `createContext`, `useContext` and `useReducer` in `utils/contextManagement.js`. It is used to set global language.

#### ApplicationStyle.jsx

Handles global style - it defines palette colors, proportions and sizes from `theme` folder.

#### ApplicationContainer.jsx

Handles generic business rules if necessary. In this case, it wasn't. (I usually use this to create some easter eggs and such).

#### containers/

Files that handle requests, data manipulation and other things regarding business rules, and only renders components from `components` folder.

#### components/

Files that handle renders and view - they are styled and its logic outside renders must not contemplate business rules.
It has two folders: `Header` and `UsersList`.

#### constants/

Global exported constants. It has three files:

- `api.js`: exports GitHub API url
- `language.js`: exports all Portuguese and English texts
- `reducers.js`: exports reducers (not really necessary but used for the sake of cleanliness)

#### utils/

- `contextManagement.js`: functions used to construct "Redux's logic" using pure React
- `hooks.js`: Hook that handles all API requests within the application - very customizable and performatic, using `axios`

#### theme/

Sets global style - colors, sizes, proportions etc

#### styles/

If a style code is too long (or it doesn't make sense to put alongside the component), `js` folder is used. If some style definition is global and not easily captured by JSS, `css` folder is used.

### Hope you like it! =)
