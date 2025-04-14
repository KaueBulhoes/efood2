import { Restaurants } from "../Models/Restaurants";

const API_URL = 'https://fake-api-tau.vercel.app/api/efood/restaurantes';

export const restaurantService = {
    async getRestaurants(): Promise<Restaurants[]> {
        try {
            const response = await fetch(API_URL)
            if (!response.ok) {
                throw new Error('Restaurantes não achados')
            }
            const data = await response.json();

            return data.map((restaurante: any) => ({
                id: restaurante.id,
                title: restaurante.titulo,
                image: restaurante.capa,
                description: restaurante.descricao,
                isFeatured: restaurante.destacado,
                type: restaurante.tipo,
                rate: restaurante.avaliacao,   
                menu: restaurante.cardapio.map((item: any) => ({
                    id: item.id,
                    name: item.nome,
                    description: item.descricao,
                    image: item.foto,
                    portion: item.porcao,
                    price: item.preco,
                }))
            }));
        } catch (error) {
            console.log(error)
            return []
        }
    }
}