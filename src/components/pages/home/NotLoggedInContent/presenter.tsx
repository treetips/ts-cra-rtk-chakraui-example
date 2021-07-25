import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Image,
  Link,
} from "@chakra-ui/react";
import { StatusCodes } from "http-status-codes";
import { memo, VFC } from "react";

type Props = {
  statusCode?: number;
  labels: {
    alert: {
      title: string;
      description: string;
    };
    source: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const NotLoggedInContent: VFC<Props> = memo(({ statusCode, labels }) => {
  return (
    <Box>
      <Alert
        status={statusCode === StatusCodes.UNAUTHORIZED ? "warning" : "info"}
        shadow="md"
        mb={3}
      >
        <AlertIcon />
        <Box flex={1}>
          <AlertTitle as="h4">{labels.alert.title}</AlertTitle>
          <AlertDescription display="block">
            {labels.alert.description}
          </AlertDescription>
        </Box>
      </Alert>

      <Image src="/images/cat-01.png" alt="cat" w="300px" />

      <Link
        href={"https://sozai-good.com/illust/animal/cat/real-c/83245"}
        target="_blank"
        isExternal
      >
        <Flex w="100%" align="center">
          <Box>{labels.source}</Box>
          <ExternalLinkIcon />
        </Flex>
      </Link>
    </Box>
  );
});
