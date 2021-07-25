import { useCallback, useMemo } from "react";
import { Env } from "../types";
import { ValueType } from "../utility-types/ValueType";
import { useTranslate } from "./useTranslate";

/**
 * Hooks for page
 * @author treetips
 */
export const usePage = () => {
  const { translate } = useTranslate();

  const siteName = useMemo(() => translate("label.page.title"), [translate]);

  /**
   * Page code
   */
  const PageCode = useMemo(
    () =>
      ({
        "main.home": "main.home",
        "main.technical-features": "main.technical-features",
        "task.list": "task.list",
        "task.detail": "task.detail",
        "task.register": "task.register",
        "task.edit": "task.edit",
        "debug.redux": "debug.redux",
        "debug.feature": "debug.feature",
        "error.error": "error.error",
      } as const),
    []
  );
  /**
   * Page code type
   */
  type PageCodeType = ValueType<typeof PageCode>;

  const DefaultPage = PageCode["main.home"];

  /**
   * Page title
   */
  const PageTitle = useMemo(
    () =>
      ({
        [PageCode["main.home"]]: translate("label.page.title.main.home"),
        [PageCode["main.technical-features"]]: translate(
          "label.page.title.main.technical-features"
        ),
        [PageCode["task.list"]]: translate("label.page.title.task.list"),
        [PageCode["task.detail"]]: translate("label.page.title.task.detail"),
        [PageCode["task.register"]]: translate(
          "label.page.title.task.register"
        ),
        [PageCode["task.edit"]]: translate("label.page.title.task.edit"),
        [PageCode["debug.redux"]]: translate("label.page.title.debug.redux"),
        [PageCode["debug.feature"]]: translate(
          "label.page.title.debug.feature"
        ),
        [PageCode["error.error"]]: translate("label.page.title.error.error"),
      } as const),
    [PageCode, translate]
  );

  /**
   * Page description
   */
  const PageDescription = useMemo(
    () =>
      ({
        [PageCode["main.home"]]: translate("label.page.description.main.home"),
        [PageCode["main.technical-features"]]: translate(
          "label.page.description.main.technical-features"
        ),
        [PageCode["task.list"]]: translate("label.page.description.task.list"),
        [PageCode["task.detail"]]: translate(
          "label.page.description.task.detail"
        ),
        [PageCode["task.register"]]: translate(
          "label.page.description.task.register"
        ),
        [PageCode["task.edit"]]: translate("label.page.description.task.edit"),
        [PageCode["debug.redux"]]: translate(
          "label.page.description.debug.redux"
        ),
        [PageCode["debug.feature"]]: translate(
          "label.page.description.debug.feature"
        ),
        [PageCode["error.error"]]: translate(
          "label.page.description.error.error"
        ),
      } as const),
    [PageCode, translate]
  );

  /**
   * <title>
   */
  const MetaTitle = useMemo(
    () =>
      ({
        [PageCode["main.home"]]: translate("label.meta.title.main.home", {
          siteName,
        }),
        [PageCode["main.technical-features"]]: translate(
          "label.meta.title.main.technical-features",
          {
            siteName,
          }
        ),
        [PageCode["task.list"]]: translate("label.meta.title.task.list", {
          siteName,
        }),
        [PageCode["task.detail"]]: translate("label.meta.title.task.detail", {
          siteName,
        }),
        [PageCode["task.register"]]: translate(
          "label.meta.title.task.register",
          {
            siteName,
          }
        ),
        [PageCode["task.edit"]]: translate("label.meta.title.task.edit", {
          siteName,
        }),
        [PageCode["debug.redux"]]: translate("label.meta.title.debug.redux", {
          siteName,
        }),
        [PageCode["debug.feature"]]: translate(
          "label.meta.title.debug.feature",
          {
            siteName,
          }
        ),
        [PageCode["error.error"]]: translate("label.meta.title.error.error", {
          siteName,
        }),
      } as const),
    [PageCode, siteName, translate]
  );

  /**
   * <meta name=”description”>
   */
  const MetaDescription = useMemo(
    () =>
      ({
        [PageCode["main.home"]]: translate("label.meta.description.main.home"),
        [PageCode["main.technical-features"]]: translate(
          "label.meta.description.main.technical-features"
        ),
        [PageCode["task.list"]]: translate("label.meta.description.task.list"),
        [PageCode["task.detail"]]: translate(
          "label.meta.description.task.detail"
        ),
        [PageCode["task.register"]]: translate(
          "label.meta.description.task.register"
        ),
        [PageCode["task.edit"]]: translate("label.meta.description.task.edit"),
        [PageCode["debug.redux"]]: translate(
          "label.meta.description.debug.redux"
        ),
        [PageCode["debug.feature"]]: translate(
          "label.meta.description.debug.feature"
        ),
        [PageCode["error.error"]]: translate(
          "label.meta.description.error.error"
        ),
      } as const),
    [PageCode, translate]
  );

  /**
   * Relative url for history.push()
   */
  const RelativeUrl = useMemo(
    () =>
      ({
        [PageCode["main.home"]]: "/tasks/",
        [PageCode["main.technical-features"]]: "/tasks/technical-features",
        [PageCode["task.list"]]: "/tasks/list",
        [PageCode["task.detail"]]: "/tasks/{0}/detail",
        [PageCode["task.register"]]: "/tasks/registration",
        [PageCode["task.edit"]]: "/tasks/{0}/edit",
        [PageCode["debug.redux"]]: "/tasks/debug/redux",
        [PageCode["debug.feature"]]: "/tasks/debug/feature",
        [PageCode["error.error"]]: "/tasks/error",
      } as const),
    [PageCode]
  );

  /**
   * Page
   */
  const Page = useMemo(
    () =>
      ({
        [PageCode["main.home"]]: {
          pageTitle: PageTitle["main.home"],
          pageDescription: PageDescription["main.home"],
          metaTitle: MetaTitle["main.home"],
          metaDescription: MetaDescription["main.home"],
          relativeUrl: RelativeUrl["main.home"],
        },
        [PageCode["main.technical-features"]]: {
          pageTitle: PageTitle["main.technical-features"],
          pageDescription: PageDescription["main.technical-features"],
          metaTitle: MetaTitle["main.technical-features"],
          metaDescription: MetaDescription["main.technical-features"],
          relativeUrl: RelativeUrl["main.technical-features"],
        },
        [PageCode["task.list"]]: {
          pageTitle: PageTitle["task.list"],
          pageDescription: PageDescription["task.list"],
          metaTitle: MetaTitle["task.list"],
          metaDescription: MetaDescription["task.list"],
          relativeUrl: RelativeUrl["task.list"],
        },
        [PageCode["task.detail"]]: {
          pageTitle: PageTitle["task.detail"],
          pageDescription: PageDescription["task.detail"],
          metaTitle: MetaTitle["task.detail"],
          metaDescription: MetaDescription["task.detail"],
          relativeUrl: RelativeUrl["task.detail"],
        },
        [PageCode["task.register"]]: {
          pageTitle: PageTitle["task.register"],
          pageDescription: PageDescription["task.register"],
          metaTitle: MetaTitle["task.register"],
          metaDescription: MetaDescription["task.register"],
          relativeUrl: RelativeUrl["task.register"],
        },
        [PageCode["task.edit"]]: {
          pageTitle: PageTitle["task.edit"],
          pageDescription: PageDescription["task.edit"],
          metaTitle: MetaTitle["task.edit"],
          metaDescription: MetaDescription["task.edit"],
          relativeUrl: RelativeUrl["task.edit"],
        },
        [PageCode["debug.redux"]]: {
          pageTitle: PageTitle["debug.redux"],
          pageDescription: PageDescription["debug.redux"],
          metaTitle: MetaTitle["debug.redux"],
          metaDescription: MetaDescription["debug.redux"],
          relativeUrl: RelativeUrl["debug.redux"],
        },
        [PageCode["debug.feature"]]: {
          pageTitle: PageTitle["debug.feature"],
          pageDescription: PageDescription["debug.feature"],
          metaTitle: MetaTitle["debug.feature"],
          metaDescription: MetaDescription["debug.feature"],
          relativeUrl: RelativeUrl["debug.feature"],
        },
        [PageCode["error.error"]]: {
          pageTitle: PageTitle["error.error"],
          pageDescription: PageDescription["error.error"],
          metaTitle: MetaTitle["error.error"],
          metaDescription: MetaDescription["error.error"],
          relativeUrl: RelativeUrl["error.error"],
        },
      } as const),
    [
      MetaDescription,
      MetaTitle,
      PageCode,
      PageDescription,
      PageTitle,
      RelativeUrl,
    ]
  );
  /**
   * Page type
   */
  type PageType = ValueType<typeof Page>;

  /**
   * Converting from page code string to language type
   * @param pageCode page code
   */
  const convertToPage = useCallback(
    (pageCode?: string): PageType => {
      // Set default page if page code is not specified.
      if (!pageCode) {
        return Page[DefaultPage];
      }
      // If the page code is specified but undefined, set the default page.
      const isExistPageCode = (() => {
        const codes = Object.keys(Page).filter(
          (key: string) => pageCode === key
        );
        return codes && 1 <= codes.length;
      })();
      if (!isExistPageCode) {
        return Page[DefaultPage];
      }
      return Page[pageCode as PageCodeType];
    },
    [DefaultPage, Page]
  );

  /**
   * Get dynamic relative uri
   * @param pathParameters path parameters
   */
  const getUri = useCallback(
    (relativeUrl: Readonly<string>, ...placeholders: any[]): string => {
      let result = relativeUrl;
      placeholders.forEach((placeholder: string, index: number) => {
        result = result.replace(`{${index}}`, placeholder);
      });
      return result;
    },
    []
  );

  /**
   * Get dynamic absolute uri
   * @param pathParameters path parameters
   */
  const getAbsoluteUrl = useCallback(
    (relativeUrl: Readonly<string>, ...placeholders: any[]): string => {
      return `${Env.FRONTEND_BASE_URL}${getUri(relativeUrl, placeholders)}`;
    },
    [getUri]
  );

  return {
    Page,
    convertToPage,
    getUri,
    getAbsoluteUrl,
  } as const;
};
