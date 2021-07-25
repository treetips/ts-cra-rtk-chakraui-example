import { Text } from "@chakra-ui/layout";
import { Box, Flex } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { AppThemeType } from "../../../../hooks";

type Props = {
  theme: AppThemeType;
  title: string;
  actions?: ReactNode;
};

/**
 * Presentational Component
 * @author treetips
 */
export const Sectioneader: VFC<Props> = memo(({ theme, title, actions }) => {
  return (
    <Flex
      p={3}
      mb={4}
      bg={theme.primary.bg}
      color={theme.primary.color}
      shadow="xl"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text as="h2" fontSize="xl" fontWeight="bold">
          {title}
        </Text>
      </Box>
      {actions && <Box>{actions}</Box>}
    </Flex>
  );
});
