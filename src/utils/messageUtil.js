import nanoid from 'nanoid';
import {NLU} from '../config/nluSettings';
import {normalizeInput as inputWatson, normalizeOutput as outputWatson} from './watson';

export function normalizeMessage(text) {
    return [{
        from: 'me',
        message: text,
        sentAt: new Date(),
        id: nanoid(),
        type: 'text'
    }]
}

//Adding the context to the message
export function addContext(message, context) {
    return [{
        context: context,
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