import { BEServiceTransaction } from './transaction.types';

export type BEServiceProgram = {
    count: number;
    items: BEServiceTransaction[];
    last: {
        id: string;
        programIdDel: string;
        time: string;
    };
};
