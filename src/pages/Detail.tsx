import MenuItem from "./detail/MenuItem"
import Search from "./detail/Search"
import SideBar from "./detail/SideBar"
import CicketCounter from "./detail/CicketCounter"

const Detail = () => {
    return (
        <div className="w-[1016px] min-w-[1016px] m-auto flex flex-col py-5 gap-5">
            <div className="w-full min-w-[960px] bg-white mx-auto rounded-lg rounded-xl shadow-md">
                <MenuItem/>
                <Search/>
            </div>
            <div className="flex gap-5">
                <SideBar/>
                <CicketCounter/>
            </div>
        </div>

    )
}

export default Detail