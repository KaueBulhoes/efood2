import { Menu } from "../../Data/menu";
import FoodCard from "../FoodCard";
import { ListContainer, FoodListContainer } from "./styles";

export type Props = {
    menuItems: Menu[]
}

const FoodList = ({menuItems}: Props) => (
    <ListContainer>
        <FoodListContainer>
            {menuItems.map((menu) => (
                <FoodCard 
                    key={menu.id}
                    title={menu.title}
                    description={menu.description}
                    image={menu.image}

                />
            ))}
        </FoodListContainer>
    </ListContainer>
)

export default FoodList