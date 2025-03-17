export type Menu = {
    id: number;
    title: string;
    description: string;
    image: string;
};

export const laDolceVitaMenu: Menu[] = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: '/Assets/images/pizza_marguerita.png',
    },
    {
        id: 2,
        title: 'Pizza Pepperoni',
        description: 'Saborosa pizza de pepperoni com molho de tomate especial, generosa camada de queijo mussarela e fatias picantes de pepperoni.',
        image: '/Assets/images/pizza_pepperoni.png',
    },
    {
        id: 3,
        title: 'Pizza Portuguesa',
        description: 'Uma deliciosa combinação de molho de tomate, queijo, presunto, ovos, cebola, pimentão, azeitonas e ervilhas fresquinhas.',
        image: '/Assets/images/pizza_portuguesa.png',
    },
    {
        id: 4,
        title: 'Pizza Quatro Queijos',
        description: 'Mistura perfeita dos queijos mussarela, gorgonzola, parmesão e provolone, derretidos em harmonia sobre uma massa leve.',
        image: '/Assets/images/pizza_quatro_queijos.png',
    },
    {
        id: 5,
        title: 'Pizza Calabresa',
        description: 'Pizza tradicional com molho de tomate, fatias de linguiça calabresa bem temperadas, cebolas frescas e orégano aromático.',
        image: '/Assets/images/pizza_calabresa.png',
    },
    {
        id: 6,
        title: 'Pizza Vegetariana',
        description: 'Uma combinação saudável e deliciosa com molho de tomate, mussarela, tomate fresco, abobrinha, berinjela, cebola e pimentões coloridos.',
        image: '/Assets/images/pizza_vegetariana.png',
    },
];
