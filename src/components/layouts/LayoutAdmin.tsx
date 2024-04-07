import { Outlet } from "react-router-dom"
import Header from "../admin/Header"
import LogoAdmin from "../admin/LogoAdmin"
import SideBar from "../admin/SideBar"

const LayoutAdmin = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="absolute left-0 top-0 z-9999 flex h-screen w-[290px] flex-col overflow-y-hidden bg-blue-300 duration-300 ease-linear hidden lg:block lg:static lg:translate-x-0">
        <LogoAdmin />
        <SideBar />
      </aside>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <Outlet/>
        </main>
      </div>
    </div>

  )
}

export default LayoutAdmin