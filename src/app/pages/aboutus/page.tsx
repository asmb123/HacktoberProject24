import AboutUs from "@/components/AboutUs"
import Header from "@/components/navbar"

const page = () => {
    return (
        <div className="w-screen h-screen flex flex-col gap-3">
        <Header/>
        <AboutUs/>
        </div>
    )
}

export default page
