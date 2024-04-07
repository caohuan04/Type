
const PricePay = () => {
    return (
        <div className="bg-white w-full p-5 rounded ">
            <div className="flex justify-between items-center font-bold text-base leading-6">
                <div>Tạm tính</div>
                <div>
                    230.000đ <i className="fa-solid fa-angle-down" />
                </div>
            </div>
            <div className="flex justify-between items-center text-xs leading-6 text-gray-700">
                <div>Giá vé</div>
                <div>
                    <div>
                        230.000 x1
                    </div>
                    <div>
                        Mã ghế/giường 05
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PricePay