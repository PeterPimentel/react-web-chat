import nanoid from 'nanoid';

export function normalizeMessage(value) {
    return {
        from: 'me',
        message: value,
        sentAt: new Date(),
        id: nanoid(),
        type: 'text'
    }
}