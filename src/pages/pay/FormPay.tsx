
const FormPay = () => {
    return (
        <form className="max-w-[680px] gap-y-5">
            <div className="p-4 bg-white rounded mb-5">
                <div className="font-bold text-base leading-6">Thông tin liên hệ</div>
                <div className="flex flex-col my-5 gap-4">
                    <div className="h-16 border rounded-md ">
                        <div className="h-full flex items-center px-5">
                            <div className="relative inputBox w-full">
                                <input className="border-transparent outline-none w-full" type="text" id="username" required />
                                <label className="absolute top-0 left-0 transition-all duration-300 text-gray-300 cursor-default" htmlFor="username">Tên người đi</label>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 border rounded-md ">
                        <div className="h-full flex items-center px-5">
                            <div className="relative inputBox w-full">
                                <input className="border-transparent outline-none w-full" type="text" id="username" required />
                                <label className="absolute top-0 left-0 transition-all duration-300 text-gray-300 cursor-default" htmlFor="username">Số điện thoại</label>
                            </div>
                        </div>
                    </div>
                    <div className="h-16 border rounded-md ">
                        <div className="h-full flex items-center px-5">
                            <div className="relative inputBox w-full">
                                <input className="border-transparent outline-none w-full" type="text" id="username" required />
                                <label className="absolute top-0 left-0 transition-all duration-300 text-gray-300 cursor-default" htmlFor="username">Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center border border-green-300 rounded p-4">
                        <input defaultChecked id="checked-checkbox" type="checkbox"  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Số điện thoại và email được sử dụng để gửi thông tin ghế ngồi của bạn khi đặt vé.
                        </label>
                    </div>
                </div>
            </div>
            <button className="rounded font-bold bg-yellow-500 hover:bg-blue-500 w-full py-4">Tiếp tục</button>
        </form>

    )
}

export default FormPay