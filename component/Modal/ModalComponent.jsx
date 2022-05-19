import React from "react";
import styles from './Modal.module.sass';
import Modal from 'react-modal';

export const ModalComponent = ({children, open, setOpen }) => {

    const customStyles = {
        overlay:{
            zIndex: 14,
            backgroundColor: 'rgba(242, 243, 247, 0.6)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none'
        },
    };

    return (
            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(prev => false)}
                style={customStyles}
            >

                {children}

            </Modal>
    )
}
