import { lazy } from "react";
import { Route } from "react-router-dom";


const Routes = [
    {
        path: '',
        element: lazy(() => import('./../Pages/HomeTemplates/HomeTemplates')),
        nested: [
            {
                path: '',
                element: lazy(() => import('./../Pages/HomeTemplates/HomePage/Homepage'))
            },
            {
                path: 'detail/:id',
                element: lazy(() => import('./../Pages/HomeTemplates/DetailPage/DetailPage'))
            },
            {
                path: `user`,
                element: lazy(() => import('./../Pages/HomeTemplates/User/User')),
            },
            {
                path: `search/:id`,
                element: lazy(() => import('./../Pages/HomeTemplates/SearchPage/SearchPage')),
            },
        ]
    },
    {
        path: `/admin`,
        element: lazy(() => import('./../Pages/AdminTemplates/AdminTemplates')),
        nested: [
            {
                path: `quanlynguoidung`,
                element: lazy(() => import('./../Pages/AdminTemplates/QuanLyNguoiDung/QuanLyNguoiDung')),
                nested: [
                    {
                        path: `add-user`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyNguoiDung/addUser/AddUser'))
                    },
                    {
                        path: `dashboard`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyNguoiDung/dashboardUser/DashboardUser'))
                    },
                    {
                        path: `edit-user/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyNguoiDung/editUser/EditUser'))
                    },
                    {
                        path: `info-user/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyNguoiDung/infoUser/infoUser'))
                    },
                ]
            },
            {
                path: `quanlyphong`,
                element: lazy(() => import('./../Pages/AdminTemplates/QuanLyPhong/QuanLyPhong')),
                nested: [
                    {
                        path: `add-room`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyPhong/addRoom/AddRoom'))
                    },
                    {
                        path: `dashboard-room`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyPhong/dashboardRoom/DashboardRoom'))
                    },
                    {
                        path: `edit-room/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyPhong/editRoom/EditRoom'))
                    },
                    {
                        path: `info-room/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyPhong/infoRoom/InfoRoom'))
                    },
                ]
            },
            {
                path: `quanlyvitri`,
                element: lazy(() => import('./../Pages/AdminTemplates/QuanLyViTri/QuanLyViTri')),
                nested: [
                    {
                        path: `dashboard-vitri`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyViTri/dashboardViTri/DashboardVitri'))
                    },
                    {
                        path: `add-vitri`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyViTri/addViTri/AddViTri'))
                    },
                    {
                        path: `info-vitri/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyViTri/infoViTri/InfoViTri'))
                    },
                    {
                        path: `edit-vitri/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyViTri/editViTri/EditViTri'))
                    },
                ]
            },
            {
                path: `quanlydatphong`,
                element: lazy(() => import('./../Pages/AdminTemplates/QuanLyDatPhong/QuanLyDatPhong')),
                nested: [
                    {
                        path: `add-bookroom`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyDatPhong/addBookRoom/AddBookRoom'))
                    },
                    {
                        path: `dashboard-bookroom`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyDatPhong/dashboardBookRoom/DashboardBookRoom'))
                    },
                    {
                        path: `edit-bookroom/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyDatPhong/editBookRoom/EditBookRoom'))
                    },
                    {
                        path: `info-bookroom/:id`,
                        element: lazy(() => import('./../Pages/AdminTemplates/QuanLyDatPhong/infoBookRoom/InfoBookRoom'))
                    },
                ]
            },
        ]
    },
    {
        path: `/login`,
        element: lazy(() => import('./../Pages/HomeTemplates/Login/LoginHome')),
    },
    {
        path: `/register`,
        element: lazy(() => import('./../Pages/HomeTemplates/Register/RegisterHome')),
    }
    ,
    {
        path: `/login-auth`,
        element: lazy(() => import('./../Pages/AdminTemplates/Auth/LoginAuth/LoginAuth')),
    },
    {
        path: `/register-auth`,
        element: lazy(() => import('./../Pages/AdminTemplates/Auth/RegisterAuth/RegisterAuth')),
    }
]



const renderRoutes = () => {
    return Routes.map((route, index) => {
        if (route.nested) {
            return <Route key={index} path={route.path} element={<route.element />}>
                {route.nested.map((item, i) => {
                    if (item.nested) {
                        return <Route key={i} path={item.path} element={<item.element />}>
                            {item.nested.map((child, ii) => {
                                return <Route key={ii} path={child.path} element={<child.element />}>

                                </Route>
                            })}
                        </Route>
                    } else {
                        return <Route key={i} path={item.path} element={<item.element />}>

                        </Route>
                    }
                })}
            </Route>
        } else {
            return <Route key={index} path={route.path} element={<route.element />}>

            </Route>
        }
    })
}

export default renderRoutes;