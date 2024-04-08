import { useEffect, useState } from "react"
import { ITrip } from "../../interfaces/trips"
import axios from "axios"
import { Link } from "react-router-dom"

const TripHistory = () => {
    const [tripHistory, setTripHistory] = useState<ITrip[]>([])
    const getTrips = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/trips?_expand=busHouse&_expand=station")
            const pastTrips = data.filter((trip: ITrip) => new Date(trip.startTime) < new Date());
            setTripHistory(pastTrips)
        } catch (error) {
            console.error("Error fetching trip history:", error);
        }

    }
    useEffect(() => {
        getTrips()
    }, [])
    return <div className="mx-auto max-w-screen-2xl grid gap-6 p-4 md:px-8 2xl:py-6 2xl:px-16">
        <h3 className="flex items-center justify-center text-4xl font-medium">Lịch sử chuyến xe</h3>
        <div>
            <Link className="bg-black text-white hover:bg-gray-700 font-semibold py-3 px-16 rounded" to="trips/add">
                Thêm mới chuyến xe
            </Link>
        </div>
        <div className="flex flex-col gap-6">
            {tripHistory.map((trip) => <Trip key={trip.id} data={trip} />)}
        </div>
    </div>
}

const Trip = (props: { data: ITrip }) => {
    return <div className="flex flex-wrap gap-6 items-center justify-center p-8 border border-black text-lg bg-gray-100 rounded shadow-lg">
        <div className="w-[250px] h-[150px] bg-cover bg-center bg-no-repeat mr-5">
            <img className="h-full w-full object-center object-cover" src="../img/sg_dl.png" />
        </div>
        <div className="grid gap-y-6 gap-x-10 mb-6 md:grid-cols-2 xl:flex-1">
            <div>
                <p className="block mb-2 font-medium text-2xl text-gray-900">
                    <Link to={"/admin/trips/" + props.data.id} className="hover:underline">{props.data.busHouse?.name}</Link>
                </p>
            </div>
            <div className="flex gap-2 font-medium text-2xl text-gray-900">
                <h3>
                    Mã chuyến:
                </h3>
                <span>
                    {props.data.id}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Số ghế còn trống:
                </h3>
                <span className="font-normal">
                    {props.data.seats}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Giá:
                </h3>
                <span className="font-normal">
                    {props.data.price}
                </span>
            </div>
            <div className="flex flex-wrap gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Khởi hành:
                </h3>
                <span className="font-normal">
                    {props.data.startTime}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Bến xe:
                </h3>
                <span className="font-normal">
                    {props.data.station?.name}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Điểm đi:
                </h3>
                <span className="font-normal">
                    {props.data.fromStation}
                </span>
            </div>
            <div className="flex gap-2 font-medium text-xl text-gray-900">
                <h3>
                    Điểm đến:
                </h3>
                <span className="font-normal">
                    {props.data.toStation}
                </span>
            </div>
        </div>
    </div>
}


export default TripHistory