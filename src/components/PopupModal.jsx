import React from 'react';
import { Modal, Box, Typography, Button, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const PopupModal = ({ open, handleClose, title, content, onConfirm, maxWidth = "90%" }) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "90%",
        maxWidth: maxWidth,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        overflowY: 'auto',
        p: 4,
        maxHeight: "95vh"
    };
    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                    <Close />
                </IconButton>
                <div className='d-flex justify-content-center flex-column align-items-center'>
                    <h3 className='yeseva'>{title}</h3>

                    {content}
                </div>
            </Box>
        </Modal>
    );
};

export default PopupModal;
