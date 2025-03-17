import Banner from "../../Components/Banner/inedx"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import { Container, LogoImage, Text } from "../../Components/Header/styles"

const RestaurantPage = () => (
    <>
        <Header>
            <Container>
                <Text>Restaurantes</Text>
                <LogoImage src="/Assets/images/logo.png" alt="efood logo" />
                <Text>0 produto(s) no carrinho</Text>
            </Container>
        </Header>
        <Banner />
        <h1>Hello</h1>
        <Footer />
    </>
)

export default RestaurantPage