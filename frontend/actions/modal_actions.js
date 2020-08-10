export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

// Object allow optional params to be passed to modal
export const openModal = (modal, object) => {

    return {
        type: OPEN_MODAL,
        modal,
        object
    }
}

export const closeModal = () => ({
    type: CLOSE_MODAL,
});