import { connectRouter } from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { FeatureKey } from "./featureKey";
import { loginReducer } from "./login";
import { taskReducer } from "./tasks";

export const history = createBrowserHistory();

const createRootReducer = (history: History) =>
  /**
   * Combine reducers
   * @see https://redux-toolkit.js.org/usage/usage-with-typescript
   */
  combineReducers({
    [FeatureKey.login]: loginReducer,
    [FeatureKey.tasks]: taskReducer,
    [FeatureKey.counter]: counterReducer,
    [FeatureKey.router]: connectRouter(history),
  });

export const combinedReducer = createRootReducer(history);

export type RootState = ReturnType<typeof combinedReducer>;
