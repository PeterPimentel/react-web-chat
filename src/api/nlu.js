import Api from './Api';
import {
    normalizeOutput as watsonOutput
} from '../utils/watson';

export function fetchMessage(message) {
    return new Promise((resolve,reject)=>{
        Api.post('/web/receive', watsonOutput(message)).then( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}