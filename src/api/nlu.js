import Api from './Api';

export async function fetchMessage(message) {
    try {
        const res = await Api.post('/web/receive', message);
        return res.data;       
    } catch (err) {
        throw err
    }
}