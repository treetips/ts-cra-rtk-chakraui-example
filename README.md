# ts-cra-rtk-chakraui-example

## Features

| Main                                                                     | Sub                                                                         | Version        |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------- | -------------- |
| [Visual Studio Code](https://code.visualstudio.com/)                     |                                                                             | latest         |
| [Node.js](https://nodejs.org/en/about/releases/) with npm                |                                                                             | v14 (LTS)      |
| [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) |                                                                             | latest         |
| [Typescript](https://www.typescriptlang.org/)                            |                                                                             | 4.3.5 or later |
| [React](https://www.typescriptlang.org/)                                 |                                                                             | 17             |
| [Chakra-UI](https://chakra-ui.com/)                                      |                                                                             | latest         |
| [Redux](https://redux.js.org/)                                           |                                                                             | latest         |
| [Redux Toolkit](https://redux-toolkit.js.org/)                           | [createAction](https://redux-toolkit.js.org/api/createAction)               | latest         |
|                                                                          | [createSlice](https://redux-toolkit.js.org/api/createSlice)                 |                |
|                                                                          | [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)       |                |
|                                                                          | [createReducer](https://redux-toolkit.js.org/api/createReducer)             |                |
|                                                                          | [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter) |                |
|                                                                          | [createSelector](https://redux-toolkit.js.org/api/createSelector)           |                |
| [REACT FINAL FORM](https://final-form.org/react)                         |                                                                             | latest         |
| [React Helmet Async](https://github.com/staylor/react-helmet-async)      |                                                                             | latest         |
| [react-intl](https://formatjs.io/docs/react-intl/)                       |                                                                             | latest         |
| [Storybook](https://storybook.js.org/)                                   |                                                                             | latest         |

- Support dark mode.
- Support i18n (english and japanese).

## Usage

```sh
git clone git@github.com:treetips/ts-cra-rtk-chakraui-example.git
cd ts-cra-redux-toolkit-chakra-ui-example
npm i
```

```sh
# Start json-server
npm run json-server

# Start react
npm run start

# Start Storybook
npm run storybook
```

## URL

| Name      | url                                 |
| --------- | ----------------------------------- |
| React     | <http://localhost:3000/>            |
| API       | <http://localhost:3001/api/tasks>   |
|           | <http://localhost:3001/api/tasks/1> |
| Storybook | <http://localhost:6006/>            |

## Directory Structures

| Dir 1         | Dir 2       | Description                                           |
| ------------- | ----------- | ----------------------------------------------------- |
| components    | entrypoints | Entry point component referenced by Router.           |
|               | pages       | A component used only on a specific page.             |
|               | projects    | Components used throughout the project.               |
|               | uiParts     | A generic component that is not limited to a project. |
| constants     |             | Constants.                                            |
| hooks         |             | Global custom hooks.                                  |
| store         |             | Redux files (`re-ducks pattern`) .                    |
| types         |             | Type definitions.                                     |
| utility-types |             | TypeScript Utility Types.                             |

## Components Directory Structures

```sh
${PresentationalComponent Name}
├── container.tsx
├── hooks.ts
├── index.ts
└── presenter.tsx
```

| File Name             | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| container.tsx         | Container Component.                                          |
| hooks.ts              | Custom hook for Presentational Component.                     |
| index.ts              | [Barrel](https://basarat.gitbook.io/typescript/main-1/barrel) |
| presenter.test.tsx    | Unit test for Presentational Component.                       |
| presenter.tsx         | Presentational Component.                                     |
| presenter.stories.tsx | Storybook.                                                    |

## Theme

The application's color settings are managed by the following files.

- src/theme.ts
- src/hooks/useAppTheme.ts

## Known Issue

### https://github.com/chakra-ui/chakra-ui/issues/2531

If you use `<MenuList>` , you will see the following warning.

```
index.js:110 Popper: CSS "margin" styles cannot be used to apply padding between the popper and its reference element or boundary. To replicate margin, use the `offset` modifier, as well as the `padding` option in the `preventOverflow` and `flip` modifiers.
```

This is a problem with `Popper.js`, which is used internally, and this also happens in v1.6.4.
