import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Divider,
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  image: {
    src: string;
    width?: number;
    height?: number;
  };
  title: string;
  url: string;
  features: {
    label: string;
    url?: string;
  }[];
};

const WIDTH = 100;
const HEIGHT = 100;

/**
 * Presentational Component
 * @author treetips
 */
export const FeatureCard: VFC<Props> = memo(
  ({ image, title, url, features }) => {
    const imageWidth = image.width || WIDTH;
    const imageHeight = image.height || HEIGHT;

    return (
      <Box
        maxW="4xs"
        h="290px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        shadow="xl"
        p={5}
      >
        <Center height={HEIGHT}>
          <Image
            src={image.src}
            alt={title}
            w={`${imageWidth}px`}
            h={`${imageHeight}px`}
          />
        </Center>

        <Divider mt={5} />

        <Box>
          <Center
            d="flex"
            alignItems="baseline"
            align="center"
            justify="space-between"
          >
            <Link href={url} isExternal rel="noopener noreferrer">
              <Text
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                color="teal.600"
              >
                {title}
                &nbsp;
                <ExternalLinkIcon mx="2px" />
              </Text>
            </Link>
          </Center>

          <Box mt="1">
            <List spacing={3}>
              {features.map((feature: { label: string; url?: string }) => (
                <ListItem key={feature.label}>
                  <ListIcon color="green.500" />
                  {feature.url ? (
                    <Link href={feature.url} isExternal>
                      {feature.label}&nbsp;
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  ) : (
                    <>{feature.label}</>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    );
  }
);
