import { Box, Text } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";
import { AppThemeType } from "../../../../hooks";

type Props = {
  theme: AppThemeType;
  isHidePageSection?: boolean;
  pageTitle?: ReactNode;
  pageDescription?: ReactNode;
};

/**
 * Presentational Component
 * @author treetips
 */
export const ArticleHeader: VFC<Props> = memo(
  ({ theme, isHidePageSection = false, pageTitle, pageDescription }) => {
    return (
      <>
        {!isHidePageSection && (
          <Box
            p={6}
            bg={theme.primary.bg}
            color={theme.primary.color}
            shadow="dark-lg"
          >
            <Text
              as="h1"
              fontSize="5xl"
              fontWeight="bold"
              textShadow="2px 2px 0 gray"
            >
              {pageTitle}
            </Text>
            {pageDescription && <Text as="p">{pageDescription}</Text>}
          </Box>
        )}
      </>
    );
  }
);
