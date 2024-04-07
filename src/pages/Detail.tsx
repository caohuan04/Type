import { useState } from "react"
import Search from "./Search"
import MenuItem from "./detail/MenuItem"
import SideBar from "./detail/SideBar"
import Ticket from "./detail/Ticket"
import { ITrip } from "../interfaces/trips"
import { getTrips } from "../api/trip.api"

const Detail = () => {
    const [trips, setTrips] = useState<ITrip[]>([]);
    const handleSearch = async (query: string) => {
        const { data } = await getTrips(query);
        setTrips(data);
    }
    return (
        <div className="w-[1016px] min-w-[1016px] m-auto flex flex-col py-5 gap-5">
            <div className="w-full min-w-[960px] bg-white mx-auto rounded-lg rounded-xl shadow-md">
                <MenuItem />
                <Search onSearch={handleSearch} />
            </div>
            <div className="flex gap-5">
                <SideBar />

                <div className="w-[730px] flex flex-col gap-4">
                    {trips.map((trip) => <Ticket key={trip.id} trip={trip} />)}

                </div>

            </div>
        </div>

    )
}

export default Detail