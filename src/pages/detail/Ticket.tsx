import { useEffect, useState } from "react"
import { ITrip } from "../../interfaces/trips"
import axios from "axios"

const Ticket = () => {
    const [trips, setTrips] = useState<ITrip[]>([])
    const getTrips = async () => {
        const { data } = await axios.get("http://localhost:3000/trips?_expand=busHouse&_expand=station")
        setTrips(data)
    }
    useEffect(() => {
        getTrips()
    }, [])
    return <>
        {trips.map((trip) => <TicketList key={trip.id} data={trip} />)}
    </>
}

const TicketList = (props: { data: ITrip }) => {
    return (
        <div className="bg-white border rounded-lg p-4 hover:drop-shadow-xl">
            <div className="min-h-[180px]">
                <div className="flex">
                    <div className="w-[150px] h-[150px] bg-cover bg-center bg-no-repeat mr-5">
                        <img className="h-full w-full object-center object-cover" src="img/anh1.jpg" />
                    </div>
                    <div className="min-h-[150px]"> {/* style="width: calc(100% - 150px);"> */}
                        <div className="flex items-center text-base font-bold">
                            <div className="mr-4 text-xl">
                                {props.data.busHouse?.name}
                            </div>
                        </div>
                        <div className="flex text-sm text-gray-500 my-4">
                            Limousine 11 chỗ <i className="fa-solid fa-shield-heart mx-2 text-sm text-gray-500" /> Tài trợ
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center ">
                                <span className="text-xl font-semibold">19:00</span><span className="mx-1">•</span><span>{props.data.fromStation}</span>
                            </div>
                            <div className="text-base text-gray-500">1h30m</div>
                            <div className="flex items-center text-gray-500">
                                <span className="text-xl font-semibold">23:30</span><span className="mx-1">•</span><span>{props.data.toStation}</span>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-[150px] flex-col flex grid justify-items-end grow  ">
                        <div className="text-xl leading-none font-bold text-blue-600">Từ {props.data.price}đ</div>
                        <div className="flex items-center leading-none text-sm text-gray-500 px-2 border-green-500 border rounded-lg">
                            <span>Giảm 20%</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                            Còn<span className="mx-1">{props.data.seats}</span>chỗ trống
                        </div>
                        <div>
                            <button className="rounded bg-yellow-400 hover:bg-blue-500 py-2 px-4">Chọn chuyến</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-2 text-base font-bold">
                    KHÔNG CẦN THANH TOÁN TRƯỚC
                </div>
            </div>
        </div>
    )
}

export default Ticket