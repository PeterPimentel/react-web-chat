import Api from './Api';

export function fetchMessage(message) {
    return new Promise((resolve,reject)=>{
        Api.post('/web/receive', message).then( res => {
            resolve(res.data)
        }).catch( err => {
            reject(err)
        })
    })
}