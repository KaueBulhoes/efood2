import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import RestaurantsList from "../../Components/RestaurantsList";
import { Title } from "../../Components/Header/styles";
import { useGetRestaurantsQuery } from "../../Api/restaurantService";


const Home = () => {
    // const [restaurantsCatalog, setRestaurantsCatalog] = useState<Restaurants[]>([])

    const {data: restaurantsCatalog = [], isLoading, error } = useGetRestaurantsQuery();

    // useEffect(() => {
    //     restaurantApi.getRestaurants().then(setRestaurantsCatalog)
    // }, []);

    return (
    <>
        <Header height="100%">
            <Title>
                Viva experiências gastronômicas <br /> no conforto da sua casa
            </Title>
        </Header>

        {isLoading ? (
        <p>Carregando restaurantes...</p>
            ) : error ? (
                <p>Erro ao carregar restaurantes.</p>
            ) : (
                <RestaurantsList restaurantsCatalog={restaurantsCatalog} />
            )}
            
        <Footer />
    </>
)}

export default Home