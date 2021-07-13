import { StoreType } from '../index';

export function getModalState(state: StoreType) {
    return state.layout.modal;
}
