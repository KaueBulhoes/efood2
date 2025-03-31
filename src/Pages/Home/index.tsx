import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import RestaurantsList from "../../Components/RestaurantsList";
import restaurantList from "../../Data/restaurants";
import { Title } from "../../Components/Header/styles";

const Home = () => (
    <>
        <Header height="100%">
            <Title>
                Viva experiências gastronômicas <br /> no conforto da sua casa
            </Title>
        </Header>
        <RestaurantsList restaurantList={restaurantList} />
        <Footer />
    </>
)

export default Home