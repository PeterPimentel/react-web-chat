import { Location } from './location.types';

export type Transaction = {
    id: string;
    amount: number;
    currency: string;
    location: string;
    created: Date;
};

export type Transactions = {
    [id: string]: Transaction;
};

export type BEServiceTransaction = {
    id: string;
    amount: number;
    currency: string;
    location: Location;
    created: Date;
};
