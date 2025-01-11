import AdminRoot from "../Pages/Admin/AdminRoot/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import SiteRoot from "../Pages/Site/SiteRoot/SiteRoot";
import Home from "../Pages/Site/Home/Home";
import Store from "../Pages/Site/Store/Store";
import Pc from "../Pages/Site/Pc/Pc";
import Mobile from "../Pages/Site/Mobile/Mobile";
import Console from "../Pages/Site/Console/Console";
import Cart from "../Pages/Site/Cart/Cart";
import Error from "../Pages/Error/Error";
import Users from "../Pages/Admin/Users/Users";
import Settings from "../Pages/Admin/Settings/Settings";
import AllProduct from "../Pages/Admin/AllProduct/AllProduct";
import NewProduct from "../Pages/Admin/NewProduct/NewProduct";

export const Routes=[{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },
{
    path: "store",
    element: <Store/>
},
{
    path: "pc",
    element: <Pc/>
},
{
    path: "console",
    element: <Console/>
},
{
    path: "mobile",
    element: <Mobile/>
},
{
    path: "cart",
    element: <Cart/>
}
]

},{
    path:"admin",
    element:<AdminRoot/>,
    children:[{
        path: "",
        element: <Dashboard />
    },
    {
        path: "user",
        element: <Users />
    },
    {
        path: "settings",
        element: <Settings />
    },
    {
        path: "allproduct",
        element: <AllProduct />
    },
    {
        path: "newproduct",
        element: <NewProduct />
    },




]
},
{
    path:"*",
    element:<Error/>
}]