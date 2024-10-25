import Header from "@/components/navbar"
import ContactUs from "@/components/ContactUs"

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-3">
      <Header/>
      <ContactUs/>
    </div>
  )
}

export default page
