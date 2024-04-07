import Form from "./admin/Form"
import Top from "./admin/Top"

const Admin = () => {
    return (
        <div className="mx-auto max-w-screen-2xl grid gap-6 p-4 md:px-8 2xl:py-6 2xl:px-16">
            <Top/>
            <Form/>
        </div>
    )
}

export default Admin