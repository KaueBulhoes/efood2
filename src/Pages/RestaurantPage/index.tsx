import { useParams } from "react-router-dom"
import Banner from "../../Components/Banner/inedx"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import { Container, LogoImage, Text } from "../../Components/Header/styles"
import restaurantList from "../../Data/restaurants"

const RestaurantPage = () => {
    const {id} = useParams()
    const restaurantId = parseInt(id || '', 10)
    const restaurant = restaurantList.find(r => r.id === restaurantId)

    if (!restaurant) {
        return <h1>Restaurante não encontrado!</h1>
    }

    return (
        <>
            <Header>
                <Container>
                    <Text>Restaurantes</Text>
                    <LogoImage src="/Assets/images/logo.png" alt="efood logo" />
                    <Text>0 produto(s) no carrinho</Text>
                </Container>
            </Header>
            <Banner 
                type={restaurant?.type}
                title={restaurant?.title}
                image={restaurant?.image}
            />
            <h1>Hello</h1>
            <Footer />
        </>
    )
}

export default RestaurantPage