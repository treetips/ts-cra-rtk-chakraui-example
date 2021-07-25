import { useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import { useEffect, useMemo } from "react";
import { LayoutConstants } from "../../../../constants";
import { useAppTheme, usePage, useTranslate } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useHeader = () => {
  const { theme } = useAppTheme();
  const { Page, getUri } = usePage();
  const { translate } = useTranslate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const siteTitle = useMemo(() => translate("label.main.title"), [translate]);
  const breakpoint = useBreakpointValue({ base: undefined, lg: "lg" });

  /**
   * Close the drawer if the browser size is increased while the drawer is open.
   */
  useEffect(() => {
    breakpoint && onClose();
  }, [onClose, breakpoint]);

  return {
    theme,
    drawer: {
      isOpen,
      onOpen,
      onClose,
    },
    appbar: {
      height: LayoutConstants.appbar.height,
      zIndex: LayoutConstants.appbar.zIndex,
    },
    labels: {
      siteTitle,
      main: {
        home: {
          url: getUri(Page["main.home"].relativeUrl),
          label: translate("label.page.title.main.home"),
        },
      },
    },
  } as const;
};
