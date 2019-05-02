import {auth} from "../../api/FirebaseConfig";
import {buttonLoading} from './uiReducer';

// Action Types
export const Types = {
    SIGNIN_FACEBOOK_USER:'SIGNIN_FACEBOOK_USER',
    SIGNIN_GOOGLE_USER:'SIGNIN_GOOGLE_USER',
    SIGNIN_EMAIL:'SIGNIN_EMAIL',
    SIGNIN_USER:'SIGNIN_USER',
    SIGNUP_FACEBOOK_USER:'SIGNUP_FACEBOOK_USER',
    SIGNUP_GOOGLE_USER:'SIGNUP_GOOGLE_USER',
    SIGNUP_EMAIL:'SIGNUP_EMAIL',
    SIGNUP_USER:'SIGNUP_USER'
};

// Reducer
const initialState = {
    logged:false
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case Types.SIGNUP_USER:
            return {
                ...state,
                logged: action.payload
            };
        default:
            return state;
    }
};

// Action Creators
export function signin() {
    return {
        type: Types.SIGNIN_USER,
        payload: true
    }
}

export function singupWithEmail(email, password) {
    return async dispatch => {
        try {
            dispatch(buttonLoading(true))
            await auth.createUserWithEmailAndPassword(email, password)
            dispatch(signin)
            dispatch(buttonLoading(false))
        } catch (error) {
            console.log("Error ->",error)
        }
    };
}