import { useState } from 'react'

// export const useModalAccuse = (initialValue = false) => {
//     const [isOpenAccuse, setIsOpen] = useState(initialValue)

//     const openModalAccuse = () => setIsOpen(true)
//     const closeModalAccuse = () => setIsOpen(false)

//     return [isOpenAccuse, openModalAccuse, closeModalAccuse]
// }

// export const useModalSuspect = (initialValue = false) => {
//     const [isOpenSuspect, setIsOpen] = useState(initialValue)

//     const openModalSuspect = () => setIsOpen(true)
//     const closeModalSuspect = () => setIsOpen(false)

//     return [isOpenSuspect, openModalSuspect, closeModalSuspect]
// }

// export const useModalCreateGame = (initialValue = false) => {
//     const [isOpenCreateGame, setIsOpen] = useState(initialValue)

//     const openModalCreateGame = () => setIsOpen(true)
//     const closeModalCreateGame = () => setIsOpen(false)

//     return [isOpenCreateGame, openModalCreateGame, closeModalCreateGame]
// }


export const useModal = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return [isOpen, openModal, closeModal]
}