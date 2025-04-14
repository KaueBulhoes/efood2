import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import RestaurantsList from "../../Components/RestaurantsList";
import { Title } from "../../Components/Header/styles";
import { useEffect, useState } from "react";
import { Restaurants } from "../../Models/Restaurants";
import { restaurantService } from "../../Api/restaurantService";

const Home = () => {
    const [restaurantsCatalog, setRestaurantsCatalog] = useState<Restaurants[]>([])

    useEffect(() => {
        restaurantService.getRestaurants().then(setRestaurantsCatalog)
    }, []);

    return (
    <>
        <Header height="100%">
            <Title>
                Viva experiências gastronômicas <br /> no conforto da sua casa
            </Title>
        </Header>
        <RestaurantsList restaurantsCatalog={restaurantsCatalog} />
        <Footer />
    </>
)}

export default Home