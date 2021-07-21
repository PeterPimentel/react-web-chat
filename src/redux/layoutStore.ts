const MODAL_SHOW = 'MODAL/SHOW';
const MODAL_HIDE = 'MODAL/HIDE';
const TOAST_TOGGLE = 'TOAST/TOGGLE';

type ModalState = {
    visible: boolean;
    content: string;
};

type ToastState = {
    visible: boolean;
    content: string;
};

export type LayoutStateType = {
    modal: ModalState;
    toast: ToastState;
};

type ModalShowAction = {
    type: typeof MODAL_SHOW;
    payload: ModalState;
};

type ModalHideAction = {
    type: typeof MODAL_HIDE;
    payload: ModalState;
};

type ToastToggleAction = {
    type: typeof TOAST_TOGGLE;
    payload: ToastState;
};

type LayoutActionTypes = ModalShowAction | ModalHideAction | ToastToggleAction;

const INITIAL_STATE: LayoutStateType = {
    modal: {
        visible: false,
        content: '',
    },
    toast: {
        visible: false,
        content: '',
    },
};

export function modalShow(modal: ModalState): ModalShowAction {
    return {
        type: MODAL_SHOW,
        payload: modal,
    };
}

export function modalHide(): ModalHideAction {
    return {
        type: MODAL_HIDE,
        payload: {
            visible: false,
            content: '',
        },
    };
}

export function modalToggle(toastState: ToastState): ToastToggleAction {
    return {
        type: TOAST_TOGGLE,
        payload: toastState,
    };
}

export default function reducer(state: LayoutStateType = INITIAL_STATE, action: LayoutActionTypes) {
    switch (action.type) {
        case MODAL_SHOW:
        case MODAL_HIDE:
            return {
                ...state,
                modal: action.payload,
            };
        case TOAST_TOGGLE:
            return {
                ...state,
                toast: action.payload,
            };
        default:
            return state;
    }
}
