import { StoreType } from '../index';

export function getContext(state: StoreType): Object {
    return state.context;
}
