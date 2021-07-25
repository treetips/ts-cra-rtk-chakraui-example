import { ChakraProvider } from "@chakra-ui/react";
import { ConnectedRouter } from "connected-react-router";
import Cookies from "js-cookie";
import { FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";
import { history, store } from "./store";
import { appTheme } from "./theme";
import { AppCookie, convertToLanguageType, translateMessages } from "./types";

const cookieLanguageCode = Cookies.get(AppCookie.language.name);
const language = convertToLanguageType(cookieLanguageCode);

type Props = {};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <HelmetProvider>
          <ChakraProvider theme={appTheme}>
            <IntlProvider
              locale={language.languageCode}
              messages={translateMessages[language.languageCode]}
            >
              {children}
            </IntlProvider>
          </ChakraProvider>
        </HelmetProvider>
      </ConnectedRouter>
    </Provider>
  );
};
