import { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import { DebugFeatureEntrypointContainer } from "./components/entrypoints/debug/DebugFeatureEntrypoint";
import { DebugReduxEntrypointContainer } from "./components/entrypoints/debug/DebugReduxEntrypoint";
import { ErrorEntrypointContainer } from "./components/entrypoints/ErrorEntrypoint";
import { HomeEntrypointContainer } from "./components/entrypoints/HomeEntrypoint";
import { TaskDetailEntrypointContainer } from "./components/entrypoints/task/TaskDetailEntrypoint";
import { TaskEditEntrypointContainer } from "./components/entrypoints/task/TaskEditEntrypoint";
import { TaskListEntrypointContainer } from "./components/entrypoints/task/TaskListEntrypoint";
import { TaskRegistrationEntrypointContainer } from "./components/entrypoints/task/TaskRegistrationEntrypoint";
import { TechnicalFeaturesEntrypointContainer } from "./components/entrypoints/TechnicalFeaturesEntrypoint";
import { AxiosConfigContainer } from "./components/projects/config/AxiosConfig";
import { HealthCheckConfigContainer } from "./components/projects/config/HealthCheckConfig";
import { RouterEventConfigContainer } from "./components/projects/config/RouterEventConfig";
import { useLanguage, useLogin, usePage } from "./hooks";

/**
 * Application entrypoint component
 * @author treetips
 */
export const App = () => {
  const { Page, getUri } = usePage();
  const { setLoggedIn } = useLogin();
  const { getLanguage, setLanguage } = useLanguage();
  const language = getLanguage();

  useEffect(() => {
    (async () => {
      // Restore login status from cookies
      await setLoggedIn();
      // Restore language from cookies
      setLanguage(language.languageCode);
    })();
  }, [language.languageCode, setLanguage, setLoggedIn]);

  return (
    <>
      {/********************************************/}
      {/* Execute only once at startup */}
      {/********************************************/}
      <AxiosConfigContainer />
      <RouterEventConfigContainer />
      <HealthCheckConfigContainer />

      {/********************************************/}
      {/* Routing */}
      {/********************************************/}
      <Switch>
        <Route exact path="/">
          {<Redirect to={getUri(Page["main.home"].relativeUrl)} />}
        </Route>
        <Route
          exact
          path={getUri(Page["main.home"].relativeUrl)}
          component={HomeEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["main.technical-features"].relativeUrl)}
          component={TechnicalFeaturesEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["task.list"].relativeUrl)}
          component={TaskListEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["task.register"].relativeUrl)}
          component={TaskRegistrationEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["task.detail"].relativeUrl, ":id")}
          component={TaskDetailEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["task.edit"].relativeUrl, ":id")}
          component={TaskEditEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["debug.feature"].relativeUrl)}
          component={DebugFeatureEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["debug.redux"].relativeUrl)}
          component={DebugReduxEntrypointContainer}
        />
        <Route
          exact
          path={getUri(Page["error.error"].relativeUrl)}
          component={ErrorEntrypointContainer}
        />
        <Route path="*" component={ErrorEntrypointContainer} />
      </Switch>
    </>
  );
};

export default App;
