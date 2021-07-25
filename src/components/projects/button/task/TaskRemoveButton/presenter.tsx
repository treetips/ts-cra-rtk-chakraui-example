import { DeleteIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { memo, VFC } from "react";
import { AppButtonContainer } from "../../../../uiParts/button/AppButton";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoading: boolean;
  onRemoveTask: () => void;
  labels: {
    buttonLabel: string;
    modalTitle: string;
    modalDescription: string;
    modalOk: string;
    modalCancel: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskRemoveButton: VFC<Props> = memo(
  ({ isOpen, onOpen, onClose, isLoading, onRemoveTask, labels }) => {
    return (
      <>
        <AppButtonContainer
          leftIcon={<DeleteIcon />}
          variant="outline"
          onClick={onOpen}
        >
          {labels.buttonLabel}
        </AppButtonContainer>

        <Modal
          blockScrollOnMount={false}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent shadow="dark-lg">
            <ModalHeader>{labels.modalTitle}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight="bold" mb="1rem">
                {labels.modalDescription}
              </Text>
            </ModalBody>

            <ModalFooter justifyContent="space-between">
              <AppButtonContainer variant="outline" onClick={onClose}>
                {labels.modalCancel}
              </AppButtonContainer>
              <AppButtonContainer isLoading={isLoading} onClick={onRemoveTask}>
                {labels.modalOk}
              </AppButtonContainer>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
);
