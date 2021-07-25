import {
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, memo, VFC } from "react";
import { FaDivide, FaEquals, FaTimes } from "react-icons/fa";
import { MdExposureNeg1, MdExposurePlus1 } from "react-icons/md";
import { AppButtonContainer } from "../../../uiParts/button/AppButton";
import { AppIconButtonContainer } from "../../../uiParts/button/AppIconButton";

type Props = {
  inputNumber: string;
  onInputNumber: (e: ChangeEvent<HTMLInputElement>) => void;
  onResetInputNumber: () => void;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onMultiply: (inputNumber: number) => void;
  onDivide: (inputNumber: number) => void;
  labels: {
    reset: {
      label: string;
    };
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const DebugReduxEntrypoint: VFC<Props> = memo(
  ({
    inputNumber,
    onInputNumber,
    onResetInputNumber,
    count,
    onIncrement,
    onDecrement,
    onMultiply,
    onDivide,
    labels,
  }) => (
    <Box>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={4}
        h="90px"
      >
        <GridItem>
          <HStack spacing={5}>
            <AppIconButtonContainer
              icon={<Icon as={MdExposurePlus1} boxSize={7} />}
              aria-label="Addition"
              onClick={onIncrement}
              w="50%"
            />
            <AppIconButtonContainer
              icon={<Icon as={MdExposureNeg1} boxSize={7} />}
              aria-label="Subtraction"
              onClick={onDecrement}
              w="50%"
            />
          </HStack>
        </GridItem>

        <GridItem rowSpan={2} justifyContent="center" alignItems="-moz-initial">
          <Flex justifyContent="flex-start" alignItems="center" h="100%">
            <Box m={5}>
              <FaEquals />
            </Box>
            <Badge fontSize="2em">{count}</Badge>
          </Flex>
        </GridItem>

        <GridItem>
          <HStack spacing={5}>
            <Input
              value={inputNumber}
              onChange={onInputNumber}
              maxLength={5}
              w="25%"
            />
            <AppIconButtonContainer
              icon={<Icon as={FaTimes} boxSize={7} />}
              aria-label="Multiplication"
              w="25%"
              onClick={() => onMultiply(Number(inputNumber))}
            />
            <AppIconButtonContainer
              icon={<Icon as={FaDivide} boxSize={7} />}
              aria-label="Division"
              w="25%"
              onClick={() => onDivide(Number(inputNumber))}
            />
            <AppButtonContainer
              variant="outline"
              w="25%"
              onClick={onResetInputNumber}
            >
              {labels.reset.label}
            </AppButtonContainer>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  )
);
