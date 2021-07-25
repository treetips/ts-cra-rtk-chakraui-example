import { Box, HStack, VStack } from "@chakra-ui/layout";
import { Alert, AlertIcon, Divider } from "@chakra-ui/react";
import React, { ComponentProps, memo } from "react";
import { LayoutConstants } from "../../../../constants";
import { ApiErrorResponsePayload } from "../../../../types/api/ApiErrorResponse";
import { ArticleHeaderContainer } from "../../hero/ArticleHeader";
import { HeaderProgressContainer } from "../../progress/HeaderProgress";
import { AppBreadcrumbContainer } from "../AppBreadcrumb";
import { FooterContainer } from "../Footer";
import { HeaderContainer } from "../Header";
import { SidenaviContainer } from "../Sidenavi";

type Props = {
  sidenavi: {
    width: string;
  };
  apiErrorResponsePayload?: ApiErrorResponsePayload;
  breadcrumbs?: { href: string; label: string }[];
} & ComponentProps<typeof ArticleHeaderContainer>;

/**
 * Presentational Component
 * @author treetips
 */
export const SidenaviLayout: React.FC<Props> = memo(
  ({
    sidenavi,
    apiErrorResponsePayload,
    breadcrumbs,
    isHidePageSection,
    pageTitle,
    pageDescription,
    children,
  }) => {
    return (
      <Box mt={LayoutConstants.appbar.height}>
        <HeaderProgressContainer />

        <HStack spacing={0} align="top">
          <Box display={{ base: "none", lg: "block" }} w={sidenavi.width}>
            <SidenaviContainer />
          </Box>
          <Box w="100%">
            <VStack spacing={0}>
              <HeaderContainer />

              <Box w="100%">
                {isHidePageSection === undefined && (
                  <ArticleHeaderContainer
                    isHidePageSection={isHidePageSection}
                    pageTitle={pageTitle}
                    pageDescription={pageDescription}
                  />
                )}

                <Box p={4}>
                  {breadcrumbs && (
                    <Box pl={2} pr={2} pb={5}>
                      <AppBreadcrumbContainer links={breadcrumbs} />
                    </Box>
                  )}

                  {apiErrorResponsePayload?.message && (
                    <Box p={5} shadow="xl">
                      <Alert status="warning" shadow="md">
                        <AlertIcon />
                        {apiErrorResponsePayload.message}
                      </Alert>
                    </Box>
                  )}

                  <Box as="article" p={5} borderWidth="2px" shadow="xl">
                    {children}
                  </Box>
                </Box>
              </Box>

              <Box w="100%">
                <Divider />
                <FooterContainer />
              </Box>
            </VStack>
          </Box>
        </HStack>
      </Box>
    );
  }
);
