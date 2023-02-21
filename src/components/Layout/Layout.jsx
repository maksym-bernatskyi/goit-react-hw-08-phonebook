import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authOperations from "Redux/auth/auth-operations";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main/Main.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser());
    }, [dispatch]);

    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Layout;