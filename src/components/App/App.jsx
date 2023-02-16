import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "components/PrivateRoute";
import { PublicRoute } from "components/PublicRoute";
import { Loader } from "components/Loader/Loader";

const Layout = lazy(() => import("components/Layout/Layout"));
const HomePage = lazy(() => import("components/Pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("components/Pages/ContactsPage"));
const Login = lazy(() => import("components/Pages/LoginPage"));
const Register = lazy(() => import("components/Pages/RegisterPage/RegisterPage"));

export const App = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route 
                        path="contacts"
                        element={
                            <PrivateRoute>
                                <ContactsPage />
                            </PrivateRoute>
                        } 
                    />
                    <Route 
                        path="login"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route 
                        path="register"
                        element={
                            <PublicRoute>
                                <Register />
                            </PublicRoute>
                        }
                    />
                </Route>
            </Routes>
        </Suspense>
    );
};