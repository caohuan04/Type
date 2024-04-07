
const Form = () => {
    return (
        <div className="p-8 border border-black text-lg bg-gray-100 rounded">
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 font-medium text-gray-900">
                            Nhà xe</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Combo box" required />
                    </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
                    <div>
                        <label htmlFor="last_name" className="block mb-2 font-medium text-gray-900">
                            Thời gian bắt đầu</label>
                        <input type="date" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div>
                        <label htmlFor="company" className="block mb-2 font-medium text-gray-900">
                            Số ghế
                        </label>
                        <input type="number" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block mb-2 font-medium text-gray-900">
                            Giá</label>
                        <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                        <label htmlFor="website" className="block mb-2 font-medium text-gray-900">
                            Bến xe</label>
                        <input type="text" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Combo box" required />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 font-medium text-gray-900">
                            Điểm đi</label>
                        <input type="text" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Combo box" required />
                    </div>
                    <div>
                        <label htmlFor="visitors" className="block mb-2 font-medium text-gray-900">
                            Điểm đến</label>
                        <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Combo box" required />
                    </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-6 py-2.5">
                    Thêm mới
                </button>
            </form>
        </div>

    )
}

export default Form