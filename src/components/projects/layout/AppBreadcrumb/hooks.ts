import { usePage } from "../../../../hooks";

export const useAppBreadcrumb = () => {
  const { Page, getUri } = usePage();
  const mainPage = Page["main.home"];

  return {
    pages: {
      home: {
        url: getUri(mainPage.relativeUrl),
        label: mainPage.pageTitle,
      },
    },
  } as const;
};
