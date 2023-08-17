import * as React from "react";
import { ModalHeader } from "react-bootstrap";

import { Button, Modal, ModalBody } from "reactstrap";

export default function CustomModal(props) {
  return (
   <>
    
      {props.open && (
        <Modal isOpen={props.open} toggle={props.modalToggle}   size={props.size || "xl"}>
          <ModalHeader >{props.modalTile}</ModalHeader>
          <ModalBody>
          {props.children}
        </ModalBody>
         
         
          
        </Modal>
      )}
  </>
  );
}
