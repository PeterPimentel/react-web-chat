export type Message = {
    id: string;
    message: string;
    from: 'BOT' | 'USER';
    type: 'TEXT' | 'IMAGE';
};
