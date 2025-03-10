import RestaurantCard from "../RestaurantCard";
import { ListContainer, RestList } from "./styles";

export default function RestaurantsList() {
    return(
        <ListContainer>
            <RestList>
                <RestaurantCard />
                <RestaurantCard />
            </RestList>
        </ListContainer>
    )
}