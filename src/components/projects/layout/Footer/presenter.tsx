import { Box, Center, Divider, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  copyrightYear: number;
};

/**
 * Presentational Component
 * @author treetips
 */
export const Footer: VFC<Props> = memo(({ copyrightYear }) => (
  <Box as="footer">
    <Divider />
    <Center p={2}>
      <Text fontSize="lg">
        Copyright (c) {copyrightYear}. Example Company. All Rights Reserved.
      </Text>
    </Center>
  </Box>
));
