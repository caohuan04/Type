import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { IBusHouse, Stations } from "../../interfaces/trips"
import { SubmitHandler, useForm } from "react-hook-form"
import { postTrip } from "../../api/trip.api"
import moment from "moment"

type AddTripForm = {
    busHouseId: string
    startTime: string
    fromStation: string,
    toStation: string,
    stationId: string,
    seats: number,
    price: number
}

const AddTrip = () => {
    const navigate = useNavigate();
    const { busHouses, stations } = useLoaderData() as { busHouses: IBusHouse[], stations: Stations[] };
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AddTripForm>()
    const onSubmit: SubmitHandler<AddTripForm> = async (data) => {
        try {
            await postTrip(data)
            navigate("/admin")
        } catch (error) {
            alert("Thêm mới chuyến đi thất bại")
        }
    }
    return (
        <div className="mx-auto max-w-screen-2xl grid gap-6 p-4 md:px-8 2xl:py-6 2xl:px-16">
            <h3 className="flex items-center justify-center text-4xl font-medium">Thêm mới chuyến xe</h3>
            <div>
                <Link to={`/admin`} className="bg-black text-white hover:bg-gray-700 font-semibold py-3 px-16 rounded">
                    Danh sách chuyến xe
                </Link>
            </div>

            <div className="p-8 border border-black text-lg bg-gray-100 rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 font-medium text-gray-900">
                                Nhà xe</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("busHouseId", { required: "Dữ liệu bắt buộc" })}>
                                {busHouses && busHouses.map(item => <option value={item.id}>{item.name}</option>)}
                            </select>
                            <p className="text-red-500 text-sm italic">{errors.busHouseId?.message}</p>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-3 sm:grid-cols-2">
                        <div>
                            <label htmlFor="last_name" className="block mb-2 font-medium text-gray-900">
                                Thời gian bắt đầu</label>
                            <input
                                type="datetime-local"
                                min={moment().add(1, 'hours').format('MMMM Do YYYY, h:mm:ss a')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("startTime")} />
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 font-medium text-gray-900">
                                Số ghế
                            </label>
                            <input type="number"
                                placeholder="Số ghế"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("seats")} />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 font-medium text-gray-900">
                                Giá</label>
                            <input type="number"
                                placeholder="Giá vé"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("price")} />
                        </div>
                        <div>
                            <label htmlFor="website" className="block mb-2 font-medium text-gray-900">
                                Bến xe</label>
                            <select
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("stationId", { required: "Dữ liệu bắt buộc" })}>
                                {stations && stations.map(items => <option value={items.id}>{items.name}</option>)}
                            </select>
                            <p className="text-red-500 text-sm italic">{errors.stationId?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="visitors" className="block mb-2 font-medium text-gray-900">
                                Điểm đi</label>
                            <input type="text"
                                placeholder="Điểm đi"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("fromStation", { required: "Dữ liệu bắt buộc" })} />
                            <p className="text-red-500 text-sm italic">{errors.fromStation?.message}</p>
                        </div>
                        <div>
                            <label htmlFor="visitors" className="block mb-2 font-medium text-gray-900">
                                Điểm đến</label>
                            <input type="text"
                                placeholder="Điểm đến"
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                {...register("toStation")} />
                        </div>
                    </div>
                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-6 py-2.5">
                        Thêm mới
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AddTrip