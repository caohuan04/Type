import { SubmitHandler, useForm } from "react-hook-form"
import moment from "moment"
import { useNavigate } from "react-router-dom"

type SearchForm = {
    toStation: string,
    formStation: string,
    startTime_gte: string

}

const Search = (props: { onSearch: (query: string) => void }) => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<SearchForm>()
    const onSubmit: SubmitHandler<SearchForm> = async (data) => {
        const query = new URLSearchParams(data)
        console.log(query.toString());

        props.onSearch(query.toString())

        navigate("/detail")

    }
    return (
        <form className="flex py-5 mx-4 gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-4 divide-x rounded-lg w-[820px] min-w-[820px] border h-14">
                <div className="h-full flex items-center">
                    <div className="mx-2">
                        <i className="fa-solid fa-circle-dot fa-xl text-blue-500" />
                    </div>
                    <div className="relative inputBox">
                        <input {...register("formStation")} className="w-11/12 border-transparent outline-none font-medium" type="text" id="username" required />
                        <label className="absolute top-0 left-0 transition-all duration-300 text-black cursor-default" htmlFor="username">Nơi đón</label>
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <div className="mx-2">
                        <i className="fa-solid fa-location-dot fa-xl text-red-500" />
                    </div>
                    <div className="relative inputBox">
                        <input {...register("toStation")} className="w-11/12 border-transparent outline-none font-medium" type="text" id="username" required />
                        <label className="absolute top-0 left-0 transition-all duration-300 text-black cursor-default" htmlFor="username">Nơi nơi đến</label>
                    </div>
                </div>
                <div className="h-full flex items-center">
                    <div className="mx-2">
                        <i className="fa-solid fa-calendar-week fa-xl text-blue-500" />
                    </div>
                    <div className="relative inputBox">
                        <input min={moment().format("YYYY-MM-DD")} {...register("startTime_gte")} className="w-11/12 border-transparent outline-none font-medium" type="date" id="username" required />
                    </div>
                </div>
                <div className="h-full flex items-center text-blue-500">
                    <div className="mx-2">
                        <i className="fa-solid fa-calendar-week fa-xl text-blue-500" />
                    </div>
                    <div className="relative inputBox">
                        <input type="text" id="username" className="w-11/12 border-transparent outline-none" placeholder="Thêm ngày về" />
                    </div>
                </div>
            </div>
            <button className="bg-yellow-400 hover:bg-blue-500 text-black font-semibold flex-1 whitespace-nowrap rounded-lg">
                Tìm Kiếm
            </button>
        </form>
    )
}

export default Search