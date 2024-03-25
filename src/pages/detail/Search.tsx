
const Search = () => {
    return (
        <form className="flex py-5 mx-4 gap-4" >
            <div className="grid grid-cols-4 divide-x w-[820px] min-w-[820px] rounded-lg border h-14">
                <div className="h-full flex items-center">
                    <div className="mr-2 ml-4">
                        <i className="fa-solid fa-circle-dot fa-xl text-blue-500" />
                    </div>
                    <div className="relative inputBox">
                        <input className="w-11/12 border-transparent outline-none font-medium text-base" type="text" id="username" required />
                        <label className="absolute top-0 left-0 transition-all duration-300 text-black cursor-default" htmlFor="username">Nơi đón</label>
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <div className="mr-2 ml-4">
                        <i className="fa-solid fa-location-dot fa-xl text-red-500" />
                    </div>
                    <div className="h-full">
                        <span className="text-xs text-gray-300">Nơi nơi đến</span>
                        <p className="font-medium text-sm ">Hiệp Hòa - Bắc Giang</p>
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <div className="mr-2 ml-4">
                        <i className="fa-solid fa-calendar-week fa-xl text-blue-500" />
                    </div>
                    <div className="h-full">
                        <span className="text-xs text-gray-300">Ngày đi</span>
                        <p className="font-medium">T2, 18/03/2024</p>
                    </div>
                </div>
                <div className="h-full flex items-center justify-center text-blue-500">
                    <div className="relative inputBox ">
                        <input type="text" id="username" className="w-11/12 border-transparent outline-none font-medium text-base"required />
                        <label className="absolute top-0 left-0 transition-all duration-300 text-blue-500 cursor-default" htmlFor="username">Thêm ngày về</label>
                    </div>
                </div>
            </div>
            <button className="bg-yellow-400 hover:bg-blue-500 text-black font-semibold flex-1 whitespace-nowrap rounded-lg">
                Tìm Kiếm
            </button>
        </form>
    )
}

export default Search