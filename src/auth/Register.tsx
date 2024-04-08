import { useNavigate } from "react-router-dom";
import { postregister } from "../api/auth";
import { SubmitHandler, useForm } from "react-hook-form";

type RegisterType = {
    email: string,
    password: string
}

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit
    } = useForm<RegisterType>()
    const onSubmit: SubmitHandler<RegisterType> = async (data) => {
        try {
            await postregister(data)
            alert("Đăng ký thành công")
            navigate("/login");
        } catch (error) {
            alert("Đăng ký thất bại")
        }
    }
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Đăng ký
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                Email
                            </label>
                            <input {...register("email", { required: "Dữ liệu bắt buộc" })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input {...register("password", { required: "Dữ liệu bắt buộc" })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-light text-gray-500">Tôi chấp nhận các
                                    <a className="font-medium text-primary-600 hover:underline" href="#">Điều khoản và Điều
                                        kiện</a></label>
                            </div>
                        </div>
                        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Đăng ký
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Quên mật khẩu? <a href="#" className="font-medium text-primary-600 hover:underline">
                                Đăng nhập
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Register