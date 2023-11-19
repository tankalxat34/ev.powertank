import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./routes/error/error";
import RouteMain from "./routes/main/main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RouteMain />,
        errorElement: <ErrorPage />
    }
])