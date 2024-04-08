import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
                <div>
                    <ul className="mb-6 flex flex-col gap-4">
                        <li>
                            <Link className="flex items-center rounded-md px-4 py-2 bg-gray-100 font-medium duration-300 ease-in-out hover:bg-gray-300" to={`/admin`}>
                                Thông tin
                            </Link>
                        </li>
                        <li>
                            <Link to={`history`} className="flex items-center rounded-md px-4 py-2 bg-gray-100 font-medium duration-300 ease-in-out hover:bg-gray-300">
                                Lịch sử chuyến đi
                            </Link>
                        </li>
                        <li>
                            <Link to={`trips/add`} className="flex items-center rounded-md px-4 py-2 bg-gray-100 font-medium duration-300 ease-in-out hover:bg-gray-300">
                                Thêm mới chuyến xe
                            </Link>
                        </li>
                        <li>
                            <a className="flex items-center rounded-md px-4 py-2 bg-gray-100 font-medium duration-300 ease-in-out hover:bg-gray-300">
                                Thêm mới nhà xe
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default SideBar