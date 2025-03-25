export type ItemCardapio = {
    id: number;
    name: string;
    description: string;
    image: string;
    portion: string;
    price: number;
};

export type Restaurants = {
    id: number;
    title: string;
    image: string;
    description: string;
    isFeatured: boolean;
    type: string;
    rate: number;
    menu: ItemCardapio[];
};
