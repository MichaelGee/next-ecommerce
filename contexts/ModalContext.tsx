import React, { useState, useMemo, useCallback, createContext } from 'react';

export const ModalContext = createContext(null);

export const ModalProvider = ({children}) => {
    const [modal, setModal] = useState<boolean>(false);

    const closeModal = useCallback(()=> setModal(v => !v), []);

    const toggleModal: Function = useCallback(() =>{
        if(modal){
            setModal(false);
        }else{
            setModal(true);
        }
    }, [modal]);

    const providerValue = useMemo(() => ({toggleModal, closeModal, modal}), [modal, closeModal, toggleModal]);

    return <ModalContext.Provider value={providerValue}>{children}</ModalContext.Provider>
}