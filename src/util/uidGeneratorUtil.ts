const createUID = (): string => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16);
};

export const generateUID = (): string => {
    return `${createUID()}-${createUID()}-${createUID()}`;
};
