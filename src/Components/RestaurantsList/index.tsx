import { Restaurants } from "../../Models/Restaurants";
import RestaurantCard from "../RestaurantCard";
import { ListContainer, RestList } from "./styles";

export type Props = {
    restaurantsCatalog: Restaurants[]
}

const RestaurantsList = ({ restaurantsCatalog }: Props) => (
    <ListContainer>
        <RestList>
            {restaurantsCatalog.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    id={restaurant.id}
                    title={restaurant.title}
                    description={restaurant.description}
                    rate={restaurant.rate}
                    image={restaurant.image}
                    type={restaurant.type}
                    isFeatured={restaurant.isFeatured ?? false}
                />
            ))}
        </RestList>
    </ListContainer>
)

export default RestaurantsList