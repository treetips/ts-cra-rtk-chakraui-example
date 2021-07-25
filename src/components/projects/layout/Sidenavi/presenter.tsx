import { Box, Divider, Icon, Stack, VStack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { MdAdd, MdBuild, MdHome, MdSearch } from "react-icons/md";
import { SiRedux } from "react-icons/si";
import { VscDebug } from "react-icons/vsc";
import { AppThemeType } from "../../../../hooks";
import { LinkProps } from "../../../../types/props/LinkProps";
import { LoginLogoutButtonContainer } from "../../button/loginLogout/LoginLogoutButton";
import { LanguageSelectionContainer } from "../../select/LanguageSelection";
import { SidenaviMenuGroupContainer } from "../SidenaviMenuGroup";

type Props = {
  theme: AppThemeType;
  isLoggedIn: boolean;
  pages: {
    main: {
      group: string;
      home: LinkProps;
      technicalFeatures: LinkProps;
    };
    task: {
      group: string;
      list: LinkProps;
      registration: LinkProps;
    };
    debug: {
      group: string;
      feature: LinkProps;
      redux: LinkProps;
    };
    docs: {
      group: string;
      docs1: LinkProps;
      docs2: LinkProps;
      docs3: LinkProps;
    };
    actions: {
      group: string;
    };
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const Sidenavi: VFC<Props> = memo(({ theme, isLoggedIn, pages }) => {
  return (
    <Box shadow="lg">
      <Stack spacing={0}>
        <SidenaviMenuGroupContainer
          groupLabel={pages.main.group}
          items={[
            {
              theme,
              icon: <Icon as={MdHome} w={8} h={8} color={theme.primary.bg} />,
              isExternal: pages.main.home.isExternal,
              url: pages.main.home.url,
              label: pages.main.home.label,
            },
            {
              theme,
              icon: <Icon as={MdBuild} w={8} h={8} color={theme.primary.bg} />,
              isExternal: pages.main.technicalFeatures.isExternal,
              url: pages.main.technicalFeatures.url,
              label: pages.main.technicalFeatures.label,
            },
          ]}
        />

        {isLoggedIn && (
          <SidenaviMenuGroupContainer
            groupLabel={pages.task.group}
            items={[
              {
                theme,
                icon: (
                  <Icon as={MdSearch} w={8} h={8} color={theme.primary.bg} />
                ),
                isExternal: pages.task.list.isExternal,
                url: pages.task.list.url,
                label: pages.task.list.label,
              },
              {
                theme,
                icon: <Icon as={MdAdd} w={8} h={8} color={theme.primary.bg} />,
                isExternal: pages.task.registration.isExternal,
                url: pages.task.registration.url,
                label: pages.task.registration.label,
              },
            ]}
          />
        )}

        <SidenaviMenuGroupContainer
          groupLabel={pages.debug.group}
          items={[
            {
              theme,
              icon: <Icon as={VscDebug} w={8} h={8} color={theme.primary.bg} />,
              isExternal: pages.debug.feature.isExternal,
              url: pages.debug.feature.url,
              label: pages.debug.feature.label,
            },
            {
              theme,
              icon: <Icon as={SiRedux} w={8} h={8} color={theme.primary.bg} />,
              isExternal: pages.debug.redux.isExternal,
              url: pages.debug.redux.url,
              label: pages.debug.redux.label,
            },
          ]}
        />
        <SidenaviMenuGroupContainer
          groupLabel={pages.docs.group}
          items={[
            {
              theme,
              isExternal: pages.docs.docs1.isExternal,
              url: pages.docs.docs1.url,
              label: pages.docs.docs1.label,
            },
            {
              theme,
              isExternal: pages.docs.docs2.isExternal,
              url: pages.docs.docs2.url,
              label: pages.docs.docs2.label,
            },
            {
              theme,
              isExternal: pages.docs.docs3.isExternal,
              url: pages.docs.docs3.url,
              label: pages.docs.docs3.label,
            },
          ]}
        />

        <VStack display={{ base: "block", lg: "none" }}>
          <SidenaviMenuGroupContainer groupLabel={pages.actions.group} />
          <Divider />
          <LanguageSelectionContainer />
          <Divider />
          <LoginLogoutButtonContainer />
        </VStack>
      </Stack>
    </Box>
  );
});
