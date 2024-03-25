
const MenuBanner = () => {
    return (
        <div className="flex justify-center items-center text-base border-b border-gray-300">
            <div className="custom-menu-item">
                <button>
                    <i className="fa-solid fa-bus-simple mr-2" />
                    Xe khách
                </button>
                <span>Mới</span>
            </div>
            <div className="custom-menu-item">
                <button>
                    <i className="fa-solid fa-plane-up mr-2" />
                    Máy bay
                </button>
                <span>Mới</span>
            </div>
            <div className="custom-menu-item">
                <button>
                    <i className="fa-solid fa-train mr-2" />
                    Tàu hoả
                </button>
                <span>Mới</span>
            </div>
            <div className="custom-menu-item">
                <button>
                    <i className="fa-solid fa-motorcycle mr-2" />
                    Thuê xe
                </button>
                <span>Mới</span>
            </div>
        </div>
    )
}

export default MenuBanner