import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Link,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import { AppThemeType } from "../../../../hooks";
import { LinkProps } from "../../../../types/props/LinkProps";
import { AppButtonContainer } from "../../../uiParts/button/AppButton";
import { AppIconButtonContainer } from "../../../uiParts/button/AppIconButton";
import { SiteIconContainer } from "../../../uiParts/icon/SiteIcon";
import { DarkModeButtonContainer } from "../../button/DarkModeButton";
import { LoginLogoutButtonContainer } from "../../button/loginLogout/LoginLogoutButton";
import { LanguageSelectionContainer } from "../../select/LanguageSelection";
import { SidenaviContainer } from "../Sidenavi";

type Props = {
  theme: AppThemeType;
  drawer: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  appbar: {
    height: string;
    zIndex: number;
  };
  labels: {
    siteTitle: string;
    main: {
      home: LinkProps;
    };
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const Header: React.VFC<Props> = memo(
  ({ theme, drawer, appbar, labels }) => {
    return (
      <Flex
        pos="fixed"
        w="100vw"
        top="0"
        left="0"
        flexDir="column"
        align="center"
        shadow="dark-lg"
        zIndex={appbar.zIndex}
      >
        <Flex
          as="nav"
          justify="space-between"
          wrap="wrap"
          padding="1.1rem"
          w="100%"
          h={appbar.height}
          bg={theme.primary.bg}
          color={theme.primary.color}
        >
          <AppIconButtonContainer
            display={{ base: "block", lg: "none" }}
            icon={<HamburgerIcon />}
            aria-label="Application Menu"
            onClick={drawer.onOpen}
          />

          <Box display={{ base: "none", lg: "block" }}>
            <Heading as="h1" size="md" letterSpacing={"-.1rem"}>
              <HStack>
                <Box className="rotate-anime">
                  <SiteIconContainer />
                </Box>
                <Box>
                  <Link to={labels.main.home.url}>{labels.siteTitle}</Link>
                </Box>
              </HStack>
            </Heading>
          </Box>

          <Flex
            display={{ base: "none", md: "block" }}
            justifyContent="flex-end"
          >
            <HStack gridGap={5}>
              <DarkModeButtonContainer />
              <LanguageSelectionContainer />
              <LoginLogoutButtonContainer />
            </HStack>
          </Flex>
        </Flex>

        <Drawer
          isOpen={drawer.isOpen}
          placement="left"
          onClose={drawer.onClose}
        >
          <DrawerOverlay />
          <DrawerContent zIndex={appbar.zIndex + 1}>
            <DrawerBody p={0}>
              <SidenaviContainer />
            </DrawerBody>

            <DrawerFooter
              borderWidth={1}
              borderColor={theme.primary.borderColor}
            >
              <VStack w="100%">
                <AppButtonContainer
                  variant="outline"
                  w="100%"
                  onClick={drawer.onClose}
                >
                  Close
                </AppButtonContainer>
              </VStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    );
  }
);
