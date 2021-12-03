import {
  Modal as ChModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export type Props = ModalProps & { title: string, footer: ReactNode };

const Modal = ({ isOpen, onClose, children, title, footer }: Props) => {
  return (
    <ChModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          {footer}
        </ModalFooter>
      </ModalContent>
    </ChModal>
  )
}

export default Modal;

