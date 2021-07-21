import { StoreType } from '../index';

export function getModalState(state: StoreType) {
    return state.layout.modal;
}

export function getToastState(state: StoreType) {
    return state.layout.toast;
}
