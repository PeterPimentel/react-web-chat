const MODAL_SHOW = 'MODAL/SHOW';
const MODAL_HIDE = 'MODAL/HIDE';

type ModalState = {
    visible: boolean;
    content: string;
};

export type LayoutStateType = {
    modal: ModalState;
};

type ModalShowAction = {
    type: typeof MODAL_SHOW;
    payload: ModalState;
};

type ModalHideAction = {
    type: typeof MODAL_HIDE;
    payload: ModalState;
};

type LayoutActionTypes = ModalShowAction | ModalHideAction;

const INITIAL_STATE: LayoutStateType = {
    modal: {
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

export default function reducer(state: LayoutStateType = INITIAL_STATE, action: LayoutActionTypes) {
    switch (action.type) {
        case MODAL_SHOW:
        case MODAL_HIDE:
            return {
                ...state,
                modal: action.payload,
            };
        default:
            return state;
    }
}
