

const TopDashboard = () => {
    return (
        <>
            <h3 className="flex items-center justify-center text-4xl font-medium">Danh sách chuyến xe</h3>
            <div className="flex justify-between items-center h-12">
                <button className="bg-black text-white hover:bg-gray-700 font-semibold h-full px-16 rounded">
                    Thêm mới chuyến xe
                </button>
                <form className=" h-full">
                    <select id="countries" className="bg-white rounded-2xl border-2 border-black h-full pr-4 focus:ring-blue-500 focus:border-blue-500 cursor-pointer">
                        <option selected>3 ngày tiếp theo</option>
                        <option value="US">5 ngày tiếp theo</option>
                        <option value="CA">7 ngày tiếp theo</option>
                        <option value="FR">14 ngày tiếp theo</option>
                        <option value="DE">1 tháng tiếp theo</option>
                    </select>
                </form>
            </div>
        </>

    )
}

export default TopDashboard