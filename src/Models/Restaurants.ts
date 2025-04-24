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

export type PratoAPI = {
    id: number
    nome: string
    descricao: string
    foto: string
    porcao: string
    preco: number
};

export type RestauranteAPI = {
    id: number
    titulo: string
    capa: string
    descricao: string
    destacado: boolean
    tipo: string
    avaliacao: number
    cardapio: PratoAPI[]
};