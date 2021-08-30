import React from 'react';
import { Div, Button, Modal, Icon, Text } from "atomize";


interface IModal {
  isOpen: boolean;
  onClose: Function;
  children: React.ReactNode;
  maxW: string;
}

export const ModalComponent = (props: IModal) => {
  const { isOpen, onClose, children, maxW } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md" maxW={maxW}>
        <Icon
          name="Cross"
          pos="absolute"
          top="1rem"
          right="1rem"
          size="16px"
          onClick={onClose}
          cursor="pointer"
        />
        <Div d="flex">
          {children}
        </Div>
      </Modal>
    </>
  )
}
