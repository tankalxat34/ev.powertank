import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/error/error";
import RouteMain from "./routes/main/main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sub from "./routes/sub/sub";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import Profile from "./routes/profile/profile";


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
            <Login />
            <Footer />
        </>
    },
    {
        path: "/signup",
        element: <>
            <Header />
            <Signup />
            <Footer />
        </>
    }
]

const _privateRouter = [
    ..._router,
    {
        path: "/profile",
        element: <>
            <Header />
            <Profile />
            <Footer />
        </>
    },
    {
        path: "/neworder",
        element: <>
            <Header />
            {/* сделать проверку на логин. Если логина нет - редирект на /login */}
            <p>Вы авторизованы и находитесь в своем профиле</p>
            <p>Страница создания заказа зарядной сессии</p>
            <Footer />
        </>
    },
]


const router = createBrowserRouter([..._router, {
    path: "*",
    element: <>
        <ErrorPage />
    </>
}]);

const privateProter = createBrowserRouter([..._privateRouter, {
    path: "*",
    element: <>
        <ErrorPage />
    </>
}]);

export { router, privateProter };