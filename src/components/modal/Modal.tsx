import React from 'react'

interface ModalProps {
    children: React.ReactNode
}
const Modal: React.FC<ModalProps>  =({ children }) => {
    return (
        <>
            <div className="wrapper_children_modal">
                {children}
            </div>
        </>
    )
}

export default Modal