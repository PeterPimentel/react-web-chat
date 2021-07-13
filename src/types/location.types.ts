export type Location = {
    id: string;
    address: string;
    city: string;
};

export type Locations = {
    [id: string]: Location;
};
