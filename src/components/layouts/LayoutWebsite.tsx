import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

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