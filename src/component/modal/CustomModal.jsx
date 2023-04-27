import * as React from "react";

import { Button, Modal } from "reactstrap";

export default function CustomModal(props) {
  return (
   <>
    
      {props.open && (
        <Modal isOpen={props.open} toggle={props.modalToggle}   size={props.size || "xl"}>
          <div className="modal-header">
            <h5 className="modal-title mt-0" id="myModalLabel">
              {props.label}
            </h5>
            <button
              type="button"
              onClick={props.modalToggle}
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{props.children}</div>
          
        </Modal>
      )}
  </>
  );
}
