import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const DefaultLayout = () => {
    return (
        <>
        <Header />
        <Outlet />
        
        </>
    )
}

export default DefaultLayout;