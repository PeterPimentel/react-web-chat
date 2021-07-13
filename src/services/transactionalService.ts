import axios from 'axios';
import { BEServiceProgram } from '../types/program.types';
import { getTransactionByProgramsUrl } from './urlService';

export const getTransactions = (): Promise<BEServiceProgram> => {
    const url = getTransactionByProgramsUrl('2314f371-39b1-4c80-8040-4144ff1bad09');

    return new Promise<BEServiceProgram>((resolve, reject) => {
        console.info('### *** FETCH -> program *** ###');
        axios
            .get(url, {
                headers: {
                    'content-type': 'application/json',
                    'Fidel-Key': 'sk_test_8b665908-284c-4dd1-a364-7ebc575c18f6',
                },
                params: {
                    limit: 10,
                },
            })
            .then((response) => {
                resolve(response.data);
            })
            .catch((err) => {
                console.log('err', err);
            });
    });
};
