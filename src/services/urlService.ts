export const BASE_URL = process.env.NLU_ENDPOINT;

export const getMessageUrl = () => {
    return `${BASE_URL}/messages`;
};
