
const Header = () => {
    return (
        <div>
            <header className="bg-blue-500">
                <div className="h-20 container flex items-center justify-between px-4 sm:px-8 mx-auto">
                    <div className="flex items-center">
                        <a href="#">
                            <img className="h-12" src="../img/logo.png" />
                        </a>
                    </div>
                    <nav className="hidden sm:flex items-center space-x-6 ml-auto">
                        <ul className="flex items-center gap-6">
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Quản lý đơn hàng</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Mở bán vé trên Vexere</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-gray-300">Trở thành đối tác</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex items-center space-x-4 ml-12 text-black">
                        <button className="bg-white hover:bg-gray-300 font-semibold py-2 px-4 rounded">
                            Hotline 24/7
                        </button>
                        <button className="bg-white hover:bg-gray-300 font-semibold py-2 px-4 rounded">
                            Đăng Nhập
                        </button>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header