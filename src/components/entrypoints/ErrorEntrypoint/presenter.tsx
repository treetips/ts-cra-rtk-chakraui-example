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
import { ErrorAlertType } from "../../../types";
import { HomeButtonContainer } from "../../projects/button/HomeButton";
import { SectioneaderContainer } from "../../projects/hero/Sectioneader";

type Props = {
  alertValue: ErrorAlertType;
  labels: {
    pageTitle: string;
    message: string;
    statusCodeMessage: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const ErrorEntrypoint: VFC<Props> = memo(({ alertValue, labels }) => (
  <Box>
    <SectioneaderContainer
      title={labels.pageTitle}
      actions={<HomeButtonContainer />}
    />

    <Alert
      status={alertValue.type}
      header={labels.statusCodeMessage}
      shadow="md"
      mb={3}
    >
      <AlertIcon />
      <Text variant="h2">{alertValue.title}</Text>
    </Alert>

    <Image src="/images/cat-03.png" alt="cat" w="300px" />

    <Link
      href={"https://sozai-good.com/illust/animal/cat/real-c/83275"}
      target="_blank"
      isExternal
    >
      <Flex w="100%" align="center">
        <Box>{labels.message}</Box>
        <ExternalLinkIcon />
      </Flex>
    </Link>
  </Box>
));
