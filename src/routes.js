import {ASPIRANT_ROUTE, DICTIONARIES_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Aspirant from "./page/aspirant";
import Auth from "./page/auth";
import Dictionaries from "./components/dictionaries";

// список маршрутов для авторизированных пользователей
export const authRoutes = [
    {
        path: ASPIRANT_ROUTE,
        render: () => <Aspirant />,
        exact: true
    },
    {
        path: DICTIONARIES_ROUTE,
        render: () => <Dictionaries />,
        exact: true
    },


];

// список маршрутов для НЕавторизированных пользователей
export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        render: () => <Auth />,
        exact: true
    }
]