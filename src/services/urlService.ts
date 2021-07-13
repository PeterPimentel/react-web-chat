export const BASE_URL = 'https://api-dev.fidel.uk/v1d';

export const getTransactionByProgramsUrl = (programId: string) => {
    return `${BASE_URL}/programs/${programId}/transactions`;
};
