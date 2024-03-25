
const BannerWrapper = () => {
    return (
        <div className="relative h-[480px] banner">
            <div className="w-full absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2">
                <div className="text-white font-semibold text-center text-2xl mb-5">
                    Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
                </div>
                <div className="w-8/12 min-w-[960px] bg-white mx-auto rounded-lg pt-1">
                    <div className="flex justify-center items-center text-base border-b border-gray-300">
                        <div className="custom-menu-item">
                            <button>
                                <i className="fa-solid fa-bus-simple mr-2" />
                                Xe khách
                            </button>
                            <span>Mới</span>
                        </div>
                        <div className="custom-menu-item">
                            <button>
                                <i className="fa-solid fa-plane-up mr-2" />
                                Máy bay
                            </button>
                            <span>Mới</span>
                        </div>
                        <div className="custom-menu-item">
                            <button>
                                <i className="fa-solid fa-train mr-2" />
                                Tàu hoả
                            </button>
                            <span>Mới</span>
                        </div>
                        <div className="custom-menu-item">
                            <button>
                                <i className="fa-solid fa-motorcycle mr-2" />
                                Thuê xe
                            </button>
                            <span>Mới</span>
                        </div>
                    </div>
                    <form className="flex py-5 mx-4 gap-4">
                        <div className="grid grid-cols-4 divide-x rounded-lg w-[820px] min-w-[820px] border h-14">
                            <div className="h-full flex items-center">
                                <div className="mx-2">
                                    <i className="fa-solid fa-circle-dot fa-xl text-blue-500" />
                                </div>
                                <div className="relative inputBox">
                                    <input className="w-11/12 border-transparent outline-none font-medium" type="text" id="username" required />
                                    <label className="absolute top-0 left-0 transition-all duration-300 text-black cursor-default" htmlFor="username">Nơi đón</label>
                                </div>
                            </div>
                            <div className="h-full flex items-center">
                                <div className="mx-2">
                                    <i className="fa-solid fa-location-dot fa-xl text-red-500" />
                                </div>
                                <div className="h-full">
                                    <span className="text-xs text-gray-300">Nơi nơi đến</span>
                                    <p className="font-medium text-sm ">Hiệp Hòa - Bắc Giang</p>
                                </div>
                            </div>
                            <div className="h-full flex items-center">
                                <div className="mx-2">
                                    <i className="fa-solid fa-calendar-week fa-xl text-blue-500" />
                                </div>
                                <div className="h-full">
                                    <span className="text-xs text-gray-300">Ngày đi</span>
                                    <p className="font-medium">T2, 18/03/2024</p>
                                </div>
                            </div>
                            <div className="h-full flex items-center justify-center text-blue-500">
                                <div className="relative inputBox ">
                                    <input type="text" id="myDate" className="w-11/12 border-transparent outline-none" required />
                                    <label className="absolute top-0 left-0 transition-all duration-300 text-blue-500 cursor-default" htmlFor="username">Thêm ngày về</label>
                                </div>
                            </div>
                        </div>
                        <button className="bg-yellow-400 hover:bg-blue-500 text-black font-semibold flex-1 whitespace-nowrap rounded-lg">
                            Tìm Kiếm
                        </button>
                    </form>
                </div>
            </div>
            <div className="absolute bottom-0 w-full nav">
                <nav className="w-2/5 mx-auto ">
                    <ul className="flex items-center justify-center h-12 gap-6">
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Chắc chắn có chỗ</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Hỗ trợ 24/7</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Nhiều ưu đãi</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-300 whitespace-nowrap">Thanh toán đa dạng</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default BannerWrapper