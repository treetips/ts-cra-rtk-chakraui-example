import { EditIcon } from "@chakra-ui/icons";
import {
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, memo, VFC } from "react";
import { AppThemeType } from "../../../../../hooks";
import { AppButtonContainer } from "../../../../uiParts/button/AppButton";

type Props = {
  theme: AppThemeType;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoading: boolean;
  taskImagePreviewSrc?: string;
  onPreviewTaskImage: (e: ChangeEvent<HTMLInputElement>) => void;
  onEditTaskImage: () => void;
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
export const TaskImageEditButton: VFC<Props> = memo(
  ({
    theme,
    isOpen,
    onOpen,
    onClose,
    isLoading,
    taskImagePreviewSrc,
    onPreviewTaskImage,
    onEditTaskImage,
    labels,
  }) => {
    return (
      <>
        <AppButtonContainer
          leftIcon={<EditIcon />}
          isLoading={isLoading}
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
              <VStack>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,image/gif,image/jpeg,image/png"
                  onChange={onPreviewTaskImage}
                />
                {taskImagePreviewSrc && (
                  <Image
                    src={taskImagePreviewSrc}
                    alt="Task preview image"
                    decoding="async"
                    style={{ width: 300 }}
                  />
                )}
              </VStack>
            </ModalBody>

            <ModalFooter justifyContent="space-between">
              <AppButtonContainer variant="outline" onClick={onClose}>
                {labels.modalCancel}
              </AppButtonContainer>
              <AppButtonContainer
                isLoading={isLoading}
                disabled={!taskImagePreviewSrc}
                onClick={onEditTaskImage}
              >
                {labels.modalOk}
              </AppButtonContainer>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
);
