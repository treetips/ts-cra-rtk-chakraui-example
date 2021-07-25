import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Text } from "@chakra-ui/layout";
import { memo, VFC } from "react";

type Props = {
  searchResultNumber: number;
  labels: {
    searchResult: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskSearchResult: VFC<Props> = memo(
  ({ searchResultNumber, labels }) => {
    return (
      <Alert
        status={1 <= searchResultNumber ? "success" : "warning"}
        shadow="md"
      >
        <AlertIcon />
        <Text as="p">{labels.searchResult}</Text>
      </Alert>
    );
  }
);
