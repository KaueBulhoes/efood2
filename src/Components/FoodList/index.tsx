import { Menu } from "../../Data/menu";
import FoodCard from "../FoodCard";
import { FoodListContainer } from "./styles";

export type Props = {
    menuItems: Menu[]
}

const FoodList = ({menuItems}: Props) => (
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
)

export default FoodList