import { useState } from "react";
import FoodCard from "../FoodCard";
import { FoodListContainer } from "./styles";
import FoodModal from "../FoodModal";
import { ItemCardapio } from "../../Models/Restaurants";

export type Props = {
    menuItems: ItemCardapio[]
}

const FoodList = ({menuItems}: Props) => {
    const [modal, setModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState<ItemCardapio | null>(null);

    const openModal = (item: ItemCardapio) => {
        setSelectedItem(item)
        setModal(true)
    }

    return (
        <>
            <FoodListContainer>
                {menuItems.map((menu) => (
                    <FoodCard 
                        key={menu.id}
                        title={menu.name}
                        description={menu.description}
                        image={menu.image}
                        onOpenModal={() => openModal(menu)}
                    />
                ))}
            </FoodListContainer>
            {selectedItem && (
                <FoodModal
                isVisible={modal}
                onClose={() => setModal(false)}
                item={selectedItem}
                />
            )}
        </>
    )
}

export default FoodList