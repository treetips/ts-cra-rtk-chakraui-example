// import { appTheme } from " ../src/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { StoryContext } from "@storybook/react";
import { ConnectedRouter } from "connected-react-router";
import Cookies from "js-cookie";
import * as React from "react";
import { HelmetProvider } from "react-helmet-async";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { history, store } from "../src/store";
import { appTheme } from "../src/theme";
import {
  AppCookie,
  convertToLanguageType,
  translateMessages,
} from "../src/types";

//#############################################################################
// @see https://github.com/chakra-ui/chakra-ui/blob/main/.storybook/preview.tsx
//#############################################################################

/**
 * Add global context for RTL-LTR switching
 */
export const globalTypes = {
  direction: {
    name: "Direction",
    description: "Direction for layout",
    defaultValue: "LTR",
    toolbar: {
      icon: "globe",
      items: ["LTR", "RTL"],
    },
  },
};

const withChakra = (StoryFn: Function, context: StoryContext) => {
  const { direction } = context.globals;
  const dir = direction.toLowerCase();
  const cookieLanguageCode = Cookies.get(AppCookie.language.name);
  const language = convertToLanguageType(cookieLanguageCode);

  return (
    // <ChakraProvider theme={extendTheme({ direction: dir })}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <ChakraProvider theme={appTheme}>
            <IntlProvider
              locale={language.languageCode}
              messages={translateMessages[language.languageCode]}
            >
              <div dir={dir} id="story-wrapper">
                {/* <div dir={dir} id="story-wrapper" style={{ minHeight: "100vh" }}> */}
                <StoryFn />
              </div>
            </IntlProvider>
          </ChakraProvider>
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>
  );
};

export const decorators = [withChakra];
