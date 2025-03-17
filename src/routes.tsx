import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import RestaurantPage from './Pages/RestaurantPage'

const PageRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
    </Routes>
)

export default PageRoutes
