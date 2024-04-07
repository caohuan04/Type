
const Content = () => {
    return (
        <div className="flex flex-wrap gap-6 items-center justify-center p-8 border border-black text-lg bg-gray-100 rounded shadow-lg">
            <div className="w-[250px] h-[150px] bg-cover bg-center bg-no-repeat mr-5">
                <img className="h-full w-full object-center object-cover" src="../img/sg_dl.png" />
            </div>
            <div className="grid gap-y-6 gap-x-10 mb-6 md:grid-cols-2">
                <div>
                    <p className="block mb-2 font-medium text-2xl text-gray-900">
                        Hải Phòng Travel (Đất Cảng)
                    </p>
                </div>
                <div className="flex gap-2 font-medium text-2xl text-gray-900">
                    <h3>
                        Mã chuyến:
                    </h3>
                    <span>
                        XRF123
                    </span>
                </div>
                <div className="flex gap-2 font-medium text-xl text-gray-900">
                    <h3>
                        Số ghế còn trống:
                    </h3>
                    <span className="font-normal">
                        10
                    </span>
                </div>
                <div className="flex gap-2 font-medium text-xl text-gray-900">
                    <h3>
                        SĐT nhà xe:
                    </h3>
                    <span className="font-normal">
                        0702208708
                    </span>
                </div>
                <div className="flex flex-wrap gap-2 font-medium text-xl text-gray-900">
                    <h3>
                        Khởi hành:
                    </h3>
                    <span className="font-normal">
                        18h30 ngày 27 - 03 - 2024
                    </span>
                </div>
                <div className="flex gap-2 font-medium text-xl text-gray-900">
                    <h3>
                        Bến xe:
                    </h3>
                    <span className="font-normal">
                        Mỹ Đình
                    </span>
                </div>
                <div className="flex gap-2 font-medium text-xl text-gray-900">
                    <h3>
                        Điểm đi: Hà Nội
                    </h3>
                    <span className="font-normal">
                        Hà Nội
                    </span>
                </div>
                <div className="flex gap-2 font-medium text-xl text-gray-900">
                    <h3>
                        Điểm đến:
                    </h3>
                    <span className="font-normal">
                        Hải Phòng
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Content