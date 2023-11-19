import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./routes/error/error";
import RouteMain from "./routes/main/main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sub from "./routes/sub/sub";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Header />
            <RouteMain />
            <Footer />
        </>
    },
    {
        path: "/sub",
        element: <>
            <Header />
            <Sub />
            <Footer />
        </>
    },
    {
        path: "/faq",
        element: <>
            <Header />
            <p>faq</p>
            <Footer />
        </>
    },
    {
        path: "*",
        element: <>
            <ErrorPage />
        </>
    }
])