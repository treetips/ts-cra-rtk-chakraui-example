import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  labels: {
    alertMessage: string;
    source: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const LoggedInContent: VFC<Props> = memo(({ labels }) => {
  return (
    <Box>
      <Alert status="success" shadow="md" mb={3}>
        <AlertIcon />
        <Text variant="h4">{labels.alertMessage}</Text>
      </Alert>

      <br />

      <Image src="/images/cat-02.png" alt="cat" w="300px" />

      <Link
        href={"https://sozai-good.com/illust/animal/cat/real-c/83285"}
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
