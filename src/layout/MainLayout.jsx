import Footer from "../components/Footer"
import Head from "../components/Head"
function MainLayout({ children }) {

    return (
        <>
        <Head />
        { children }
         <Footer />
        </>   
    )
}

export default MainLayout;