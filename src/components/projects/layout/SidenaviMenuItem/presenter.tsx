import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Link } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { NavLink } from "react-router-dom";
import { AppThemeType } from "../../../../hooks";
import { LinkProps } from "../../../../types/props/LinkProps";

type Props = {
  theme: AppThemeType;
} & LinkProps;

/**
 * Presentational Component
 * @author treetips
 */
export const SidenaviMenuItem: VFC<Props> = memo(
  ({ theme, icon, isExternal = false, url, label }) => {
    return (
      <Box
        p={3}
        shadow="md"
        _hover={{
          bg: `${theme.primary.hover.bg}`,
          color: `${theme.primary.hover.color}`,
        }}
      >
        {isExternal ? (
          <Link href={url} target="_blank" isExternal={isExternal}>
            <Flex w="100%" align="center">
              <Box mr={3}>{icon && icon}</Box>
              <Box>{label}</Box>
              <ExternalLinkIcon />
            </Flex>
          </Link>
        ) : (
          <Link to={url} as={NavLink} activeClassName="selected">
            <Flex w="100%" align="center">
              <Box mr={3}>{icon && icon}</Box>
              <Box>{label}</Box>
            </Flex>
          </Link>
        )}
      </Box>
    );
  }
);
