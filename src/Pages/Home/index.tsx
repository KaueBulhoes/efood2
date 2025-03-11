import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import RestaurantsList from "../../Components/RestaurantsList";
import Restaurants from "../../Models/Restaurants";

const restaurantList: Restaurants[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        rate: 4.9,
        image: '/Assets/images/hioki_sushi.png',
        type: 'Japonesa',
        isFeatured: true,
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rate: 4.6,
        image: '/Assets/images/la_dolce_vita.png',
        type: 'Italiana',
    },
    {
        id: 3,
        title: 'El Toro Loco',
        description: 'Sabores intensos da culinária mexicana entregues na sua porta! Tacos, burritos e nachos com ingredientes frescos e autênticos. Experimente nossas salsas picantes e viva uma experiência mexicana de verdade.',
        rate: 4.8,
        image: '/Assets/images/el_toro_loco.png',
        type: 'Mexicana',
    },
    {
        id: 4,
        title: 'Urban Burgers',
        description: 'Hambúrgueres artesanais, batatas crocantes e molhos especiais. Feitos com carnes selecionadas e opções vegetarianas. Entrega rápida e sabor inigualável para matar sua fome de forma prática.',
        rate: 4.7,
        image: '/Assets/images/urban_burgers.png',
        type: 'Americana',
    },
    {
        id: 5,
        title: 'Namaste Curry House',
        description: 'Explore a autêntica cozinha indiana sem sair de casa! Curries aromáticos, naan fresquinho e especiarias que aquecem a alma. Tudo preparado com muito cuidado para você ter uma experiência única.',
        rate: 4.8,
        image: '/Assets/images/namaste_curry_house.png',
        type: 'Indiana',
    },
    {
        id: 6,
        title: 'Green Valley Salads',
        description: 'Opções saudáveis de saladas, wraps e pratos leves. Ingredientes frescos, combinações criativas e molhos irresistíveis. Ideal para quem busca equilíbrio sem abrir mão do sabor!',
        rate: 4.5,
        image: '/Assets/images/green_valley_salads.png',
        type: 'Saudável',
    },
];

const Home = () => (
    <>
        <Header />
        <RestaurantsList restaurantList={restaurantList} />
        <Footer />
    </>
)

export default Home