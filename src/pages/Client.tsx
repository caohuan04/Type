import { useState } from "react"
import { ITrip } from "../interfaces/trips"
import Content from "./client/Content"
import MenuBanner from "./client/MenuBanner"
import PopContainer from "./client/PopContainer"
import { getTrips } from "../api/trip.api"
import Search from "./Search"
import Ticket from "./client/Ticket"


const Client = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const handleSearch = async (query: string) => {
        const { data } = await getTrips(query);
        setTrips(data);
    }
    return (
        <>
            <div className="relative h-[480px] banner">
                <div className="w-full absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2">
                    <div className="text-white font-semibold text-center text-2xl mb-5">
                        Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
                    </div>
                    <div className="w-8/12 min-w-[960px] bg-white mx-auto rounded-lg pt-1">
                        <MenuBanner />
                        <Search onSearch={handleSearch} />
                    </div>
                </div>
                <PopContainer />

            </div>
            <div className="py-5 w-[980px] mx-auto flex flex-col gap-5">
                {trips.map(items => <Ticket key={items.id} />)}
            </div>

            <div className="py-5 w-[980px] mx-auto ">
                <p className="text-left text-2xl font-medium leading-normal opacity-100 mb-4">TUYẾN ĐƯỜNG PHỔ BIẾN</p>
                <Content />
            </div>

        </>
    )
}

export default Client