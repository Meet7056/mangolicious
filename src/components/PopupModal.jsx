import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const PopupModal = ({ open, handleClose, title, content, onConfirm }) => {
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <h3 className='yeseva'>{title}</h3>

                    {content}
                </div>
            </Box>
        </Modal>
    );
};

export default PopupModal;
