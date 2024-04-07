import { Outlet } from 'react-router-dom'
import Header from '../client/Header'
import Footer from '../client/Footer'

const LayoutWebsite = () => {
    return (
        <div className="font-sans scroll-smooth bg-gray-100">
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>

    )
}

export default LayoutWebsite