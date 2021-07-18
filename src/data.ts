export const DATA: {
    id: string;
    message: string;
    from: 'BOT' | 'USER';
    type: 'TEXT' | 'IMAGE';
}[] = [
    {
        id: '1',
        message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        from: 'BOT',
        type: 'TEXT',
    },
    {
        id: '2',
        message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        from: 'USER',
        type: 'TEXT',
    },
    {
        id: '3',
        message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. industrys standard dummy text ever since',
        from: 'BOT',
        type: 'TEXT',
    },
    {
        id: '210',
        message: 'https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665__480.jpg',
        from: 'BOT',
        type: 'IMAGE',
    },
];
