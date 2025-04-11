import { useState } from "react";
import FoodCard from "../FoodCard";
import { FoodListContainer } from "./styles";
import FoodModal from "../FoodModal";

export type Props = {
    menuItems: any[]
}

const FoodList = ({menuItems}: Props) => {
    const [modal, setModal] = useState(false)

    return (
        <>
            <FoodListContainer>
                {menuItems.map((menu) => (
                    <FoodCard 
                        key={menu.id}
                        title={menu.title}
                        description={menu.description}
                        image={menu.image}
                        onOpenModal={() => setModal(true)}
                    />
                ))}
            </FoodListContainer>
            <FoodModal
                isVisible={modal}
                onClose={() => setModal(false)}
            />
        </>
    )
}

export default FoodList