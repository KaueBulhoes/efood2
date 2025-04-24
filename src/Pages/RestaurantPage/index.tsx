import { useParams } from "react-router-dom"
import Banner from "../../Components/Hero"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import { TextContainer, Text, TextCart } from "../../Components/Header/styles"
import FoodList from "../../Components/FoodList"
import { useGetRestaurantsQuery } from "../../Api/restaurantService"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../Store"
import { open } from '../../Store/reducers/cart'


const RestaurantPage = () => {
    const { items } = useSelector((state: RootReducer) => state.cart)
    const { id } = useParams()
    const restaurantId = parseInt(id || '', 10)
    
    const { data: restaurantsCatalog = [], isLoading, error } = useGetRestaurantsQuery()
    
    const restaurant = restaurantsCatalog.find(r => r.id === restaurantId)
    
    const dispatch = useDispatch()
    const openCart = () => {
        dispatch(open())
    }

    if (isLoading) {
        return <h1>Carregando restaurante...</h1>
    }

    if (error || !restaurant) {
        return <h1>Restaurante não encontrado!</h1>
    }

    return (
        <>
            <Header height="186px">
                <TextContainer>
                    <Text>Restaurantes</Text>
                    <TextCart onClick={openCart}>{items.length} produto(s) no carrinho</TextCart>
                </TextContainer>
            </Header>
            <Banner 
                type={restaurant.type}
                title={restaurant.title}
                image={restaurant.image}
            />
            {restaurant.menu.length > 0 ? (
                <FoodList menuItems={restaurant.menu} />
            ) : (
                <h2 style={{ textAlign: 'center', margin: '24px 0' }}>
                    Este restaurante ainda não possui menu cadastrado.
                </h2>
            )}
            <Footer />
        </>
    )
}

export default RestaurantPage
