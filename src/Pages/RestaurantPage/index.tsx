import { useParams } from "react-router-dom"
import Banner from "../../Components/Banner/inedx"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import { Container, Text } from "../../Components/Header/styles"
import restaurantList from "../../Data/restaurants"
import FoodList from "../../Components/FoodList"
import { laDolceVitaMenu, Menu } from "../../Data/menu";

const menuMapping: Record<number, Menu[]> = {
    2: laDolceVitaMenu
}

const RestaurantPage = () => {
    const {id} = useParams()
    const restaurantId = parseInt(id || '', 10)
    const restaurant = restaurantList.find(r => r.id === restaurantId)

    if (!restaurant) {
        return <h1>Restaurante não encontrado!</h1>
    }

    const currentMenu = menuMapping[restaurantId] || [];

    return (
        <>
            <Header height="186px">
                <Container>
                    <Text>Restaurantes</Text>
                    <Text>0 produto(s) no carrinho</Text>
                </Container>
            </Header>
            <Banner 
                type={restaurant?.type}
                title={restaurant?.title}
                image={restaurant?.image}
            />
            {currentMenu && currentMenu.length > 0 ? (
                <FoodList menuItems={currentMenu} />
            ) : (
                <h2 style={{textAlign: 'center', margin: '24px 0'}}>
                    Este restaurante ainda não possui menu cadastrado.
                </h2>
            )}
            <Footer />
        </>
    )
}

export default RestaurantPage