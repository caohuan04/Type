import Content from "./dashboard/Content"
import TopDashboard from "./dashboard/TopDashboard"

const Dashboard = () => {
    return (
        <div className="mx-auto max-w-screen-2xl grid gap-6 p-4 md:px-8 2xl:py-6 2xl:px-16">
            <TopDashboard/>
            <Content/>
        </div>

    )
}

export default Dashboard