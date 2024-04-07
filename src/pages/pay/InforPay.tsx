
const InforPay = () => {
    return (
        <div className="bg-white w-full p-5 rounded ">
            <div className="font-bold text-base leading-6 py-5">Thông tin liên hệ</div>
            <div className="border rounded-md divide-y flex flex-col justify-center font-semibold">
                <div className="flex justify-between items-center m-2">
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <i className="fa-solid fa-bus" />
                            <span>T2, 25/3/2024</span>
                        </div>
                        <div className="text-blue-500">
                            <a>Chi tiết</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center w-full p-2">
                    <div className="flex gap-4 ">
                        <img src="img/hn_hp.png" className="w-16" />
                        <p>Hải phòng travel</p>
                    </div>
                </div>
                <div className="flex flex-col items-center p-2">
                    <div className="flex justify-between items-center w-full m-2">
                        <div>
                            <p>19:00</p>
                            <p className="font-normal text-xs">(25/3)</p>
                        </div>
                        <div>
                            <p>Hà Nội</p>
                            <p className="font-normal text-xs">Số 79, đường Cổ Long, Long Biên</p>
                        </div>
                        <div className="text-blue-500">
                            <a>Thay đổi</a>
                        </div>
                    </div>
                    <div className="flex justify-between items-center w-full m-2">
                        <div>
                            <p>19:00</p>
                            <p className="font-normal text-xs">(25/3)</p>
                        </div>
                        <div>
                            <p>Hải Phòng</p>
                            <p className="font-normal text-xs">Số 79, đường Cổ Long, Long Biên</p>
                        </div>
                        <div className="text-blue-500">
                            <a>Thay đổi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InforPay