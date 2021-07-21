const CONTEXT_UPDATE = 'CONTEXT/UPDATE';

export type ContextStateType = Object;

type ContextUpdateAction = {
    type: typeof CONTEXT_UPDATE;
    payload: Object;
};

type ContextActionTypes = ContextUpdateAction;

export function contextUpdate(context: Object): ContextUpdateAction {
    return {
        type: CONTEXT_UPDATE,
        payload: context,
    };
}

export default function reducer(state: Object = {}, action: ContextActionTypes) {
    switch (action.type) {
        case CONTEXT_UPDATE:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
