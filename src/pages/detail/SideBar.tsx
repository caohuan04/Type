
const SideBar = () => {
    return (
        <div className="bg-white w-[266px] max-h-[280px] flex flex-col gap-4 border rounded-lg p-5">
            <div className="font-bold text-lg leading-6 mb-0">
                Sắp xếp
            </div>
            <div className=" flex flex-col gap-4">
                <label className="flex box-border text-black text-base/5 cursor-pointer">
                    <input type="radio" className="h-5 w-5 mr-2  border-2 border-gray-600 rounded-full cursor-pointer " />
                    <span>Mặc định</span>
                </label>
                <label className="flex box-border text-black text-base/5 cursor-pointer">
                    <input type="radio" className="h-5 w-5 mr-2  border-2 border-gray-600 rounded-full cursor-pointer " />
                    <span>Giờ đi sớm nhất</span>
                </label>
                <label className="flex box-border text-black text-base/5 cursor-pointer">
                    <input type="radio" className="h-5 w-5 mr-2  border-2 border-gray-600 rounded-full cursor-pointer " />
                    <span>Giờ đi muộn nhất</span>
                </label>
                <label className="flex box-border text-black text-base/5 cursor-pointer">
                    <input type="radio" className="h-5 w-5 mr-2  border-2 border-gray-600 rounded-full cursor-pointer " />
                    <span>Đánh giá cao nhất</span>
                </label>
                <label className="flex box-border text-black text-base/5 cursor-pointer">
                    <input type="radio" className="h-5 w-5 mr-2  border-2 border-gray-600 rounded-full cursor-pointer " />
                    <span>Giá tăng dần</span>
                </label>
                <label className="flex box-border text-black text-base/5 cursor-pointer">
                    <input type="radio" className="h-5 w-5 mr-2  border-2 border-gray-600 rounded-full cursor-pointer " />
                    <span>Giá giảm dần</span>
                </label>
            </div>
        </div>
    )
}

export default SideBar