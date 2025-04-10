import { useParams } from "react-router-dom"
import Banner from "../../Components/Banner/inedx"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import { TextContainer, Text } from "../../Components/Header/styles"
import FoodList from "../../Components/FoodList"
import { useEffect, useState } from "react"
import { restaurantService } from "../../Api/restaurantService"
import { Restaurants } from "../../Models/Restaurants"

const RestaurantPage = () => {
    const [restaurantsCatalog, setRestaurantsCatalog] = useState<Restaurants[]>([])

    useEffect(() => {
        restaurantService.getRestaurants().then(setRestaurantsCatalog)
    }, []);

    const {id} = useParams()
    const restaurantId = parseInt(id || '', 10)
    const restaurant = restaurantsCatalog.find(r => r.id === restaurantId)
    console.log("restaurant", restaurant)

    if (!restaurant) {
        return <h1>Restaurante não encontrado!</h1>
    }

    return (
        <>
            <Header height="186px">
                <TextContainer>
                    <Text>Restaurantes</Text>
                    <Text>0 produto(s) no carrinho</Text>
                </TextContainer>
            </Header>
            <Banner 
                type={restaurant?.type}
                title={restaurant?.title}
                image={restaurant?.image}
            />
            {restaurant?.menu.length > 0 ? (
                <FoodList menuItems={restaurant?.menu} />
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