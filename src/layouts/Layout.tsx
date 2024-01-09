import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"

interface Props{
    children:React.ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        <Hero/>
        <div className="container mx-auto py-10 flex-1">
         {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout