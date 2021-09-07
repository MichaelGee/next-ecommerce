import React, { useState, useMemo, useCallback, createContext } from 'react';

export const ModalContext = createContext(null);

export const ModalProvider = ({children}) => {
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const [modal, setModal] = useState<boolean>(false);
    const [signupModal, setSignupModal] = useState<boolean>(false);

    const closeModal = useCallback(()=> setModal(false), []);
    const toggleLoginModal = useCallback(()=> setLoginModal(v => !v), []);
    const toggleModal = useCallback(()=> setModal(v => !v), []);
    const toggleSignupModal = useCallback(()=> setSignupModal(v => !v), []);

    

    const providerValue = useMemo(() => ({closeModal, loginModal, modal, signupModal, toggleLoginModal, toggleModal, toggleSignupModal}), [closeModal, loginModal, modal, signupModal, toggleLoginModal, toggleModal, toggleSignupModal]);

    return <ModalContext.Provider value={providerValue}>{children}</ModalContext.Provider>
}