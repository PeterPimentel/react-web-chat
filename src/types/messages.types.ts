export type Message = {
    uid: string;
    message: string;
    from: 'BOT' | 'USER';
    type: 'TEXT' | 'IMAGE';
};

export type MessageRequest = {
    message: string;
    context: Object;
};

export type BotMessageResponse = {
    message: Message;
    context: Object;
};
