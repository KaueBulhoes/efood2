import Restaurants from "../../Models/Restaurants";
import RestaurantCard from "../RestaurantCard";
import { ListContainer, RestList } from "./styles";

export type Props = {
    restaurantList: Restaurants[]
}

const RestaurantsList = ({ restaurantList }: Props) => (
    <ListContainer>
        <RestList>
            {restaurantList.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
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