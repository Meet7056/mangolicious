import React from 'react';
import { Modal, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const PopupModal = ({
  open,
  handleClose,
  title,
  content,
  maxWidth = '90%',
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: maxWidth,
    backgroundColor: '#fff',
    borderRadius: 8,
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    overflowY: 'auto',
    padding: '1.5rem',
    maxHeight: '95vh',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={style}>
        <IconButton
          onClick={handleClose}
          style={{ position: 'absolute', top: 8, right: 8 }}
        >
          <Close />
        </IconButton>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h3 className="yeseva">{title}</h3>
          {content}
        </div>
      </div>
    </Modal>
  );
};

export default PopupModal;
