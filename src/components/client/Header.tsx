import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-blue-500">
            <div className="h-20 container flex items-center justify-between px-4 sm:px-8 mx-auto">
                <div className="flex items-center">
                    <Link to="#">
                        <img className="h-12" src="../img/logo.png" />
                    </Link>
                </div>
                <nav className="hidden sm:flex items-center space-x-6 ml-auto">
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link to="#" className="text-white hover:text-gray-300">Quản lý đơn hàng</Link>
                        </li>
                        <li>
                            <Link to="detail" className="text-white hover:text-gray-300">Chi tiết chuyến xe</Link>
                        </li>
                        <li>
                            <Link to="#" className="text-white hover:text-gray-300">Trở thành đối tác</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4 ml-12 text-black">
                    <button className="bg-white hover:bg-gray-300 font-semibold py-2 px-4 rounded">
                        Hotline 24/7
                    </button>
                    <Link to={`login`} className="bg-white hover:bg-gray-300 font-semibold py-2 px-4 rounded">
                        Đăng Nhập
                    </Link>
                </div>
            </div>
        </header>

    )
}

export default Header