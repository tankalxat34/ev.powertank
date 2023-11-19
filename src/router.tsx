import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./routes/error/error";
import RouteMain from "./routes/main/main";
import Header from "./components/Header/Header";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Header />
            <RouteMain />
        </>
    },
    {
        path: "/sub",
        element: <>
            <Header />
            <p>sub</p>
        </>
    },
    {
        path: "/faq",
        element: <>
            <Header />
            <p>faq</p>
        </>
    },
    {
        path: "*",
        element: <>
            <ErrorPage />
        </>
    }
])