import {
  useAppTheme,
  useLogin,
  usePage,
  useTranslate,
} from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useSidenavi = () => {
  const { theme } = useAppTheme();
  const { Page, getUri } = usePage();
  const { translate } = useTranslate();
  const { isLoggedIn } = useLogin();

  return {
    theme,
    isLoggedIn,
    pages: {
      main: {
        group: translate("label.menu.group.title"),
        home: {
          url: getUri(Page["main.home"].relativeUrl),
          label: translate("label.page.title.main.home"),
        },
        technicalFeatures: {
          url: getUri(Page["main.technical-features"].relativeUrl),
          label: translate("label.page.title.main.technical-features"),
        },
      },
      task: {
        group: translate("label.menu.group.task"),
        list: {
          url: getUri(Page["task.list"].relativeUrl),
          label: translate("label.page.title.task.list"),
        },
        registration: {
          url: getUri(Page["task.register"].relativeUrl),
          label: translate("label.page.title.task.register"),
        },
      },
      debug: {
        group: translate("label.menu.group.operation-check"),
        feature: {
          url: getUri(Page["debug.feature"].relativeUrl),
          label: translate("label.page.title.debug.feature"),
        },
        redux: {
          url: getUri(Page["debug.redux"].relativeUrl),
          label: translate("label.page.title.debug.redux"),
        },
      },
      docs: {
        group: translate("label.menu.group.docs"),
        docs1: {
          isExternal: true,
          url: "https://chakra-ui.com/docs/getting-started",
          label: "Chakra UI",
        },
        docs2: {
          isExternal: true,
          url: "https://material-ui.com/customization/color/#color-palette",
          label: "Color palette",
        },
        docs3: {
          isExternal: true,
          url: "https://react-icons.github.io/react-icons/",
          label: "React Icons",
        },
      },
      actions: {
        group: translate("label.actions"),
      },
    },
  } as const;
};
