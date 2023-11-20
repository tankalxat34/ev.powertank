import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "./routes/error/error";
import RouteMain from "./routes/main/main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sub from "./routes/sub/sub";


const _router: Object[] = [
    {
        path: "/",
        element: <>
            <Header />
            <RouteMain />
            <Footer />
        </>
    },
    {
        path: "/price",
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
        path: "/job",
        element: <>
            <Header />
            <p>Раздел job в разработке</p>
            <Footer />
        </>
    },
    {
        path: "/login",
        element: <>
            <Header />
            <p>Раздел login в разработке</p>
            <Footer />
        </>
    },
    {
        path: "*",
        element: <>
            <ErrorPage />
        </>
    }
]

const _privateRouter = [
    ..._router,
    {
        path: "/profile",
        element: <>
            <Header />
            <p>Вы авторизованы и находитесь в своем профиле</p>
            <Footer />
        </>
    }
]


const router = createBrowserRouter(_router);
const privateProter = createBrowserRouter(_privateRouter);

export { router, privateProter };