import Content from "./client/Content"
import MenuBanner from "./client/MenuBanner"
import PopContainer from "./client/PopContainer"
import Search from "./client/Search"

const Client = () => {
    return (
        <>
            <div className="relative h-[480px] banner">
                <div className="w-full absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2">
                    <div className="text-white font-semibold text-center text-2xl mb-5">
                        Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
                    </div>
                    <div className="w-8/12 min-w-[960px] bg-white mx-auto rounded-lg pt-1">
                        <MenuBanner/>
                        <Search/>
                    </div>
                </div>
                <PopContainer/>
            </div>
            <Content/>
        </>
    )
}

export default Client