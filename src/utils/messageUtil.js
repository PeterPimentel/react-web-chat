import nanoid from 'nanoid';
import {NLU} from '../config/nluSettings';
import {normalizeInput as inputWatson, normalizeOutput as outputWatson} from './watson';

export function normalizeMessage(text, context) {
    return [{
        context,
        from: 'me',
        message: text,
        sentAt: new Date(),
        id: nanoid(),
        type: 'text'
    }]
}

//Reduce the size of array saved in the store
export function extractContext(message) {
    return [{
        from:'me',
        message: message[0].message,
        sentAt: new Date(),
        id: message[0].id,
        type: 'text'
    }]
}

export function convertBasedOnNlu (message, from) {
    switch (NLU) {
        case 'WATSON':
            if(from === 'me'){
                return outputWatson(message)
            }else{
                return inputWatson(message)
            }
        default:
        break;
    }
}