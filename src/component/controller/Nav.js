import React from 'react'
import { 
    Routes, 
    Route, 
    Outlet, 
    BrowserRouter as Router, 
    createBrowserRouter, 
    RouterProvider,
    useParams
} from 'react-router-dom'

import { Main } from '../main'
import { RealTimeCompared } from '../charts'


const Login = () => {
    return (
        <div>
            Login
        </div>
    )
}

const Layout = () => {
    return (
        <div>
            {/* <h1>Layout</h1> */}
            <div>
                <div style={{ border: "1px solid red", padding: 20 }}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <div style={{ width: 200, height: 300, border: "1px solid green" }}></div>
            <div style={{ width: 200, height: 300, border: "1px solid green" }}></div>
            <div style={{ width: 200, height: 300, border: "1px solid green" }}></div>
            <div style={{ width: 200, height: 300, border: "1px solid green" }}></div>
            <div style={{ width: 200, height: 300, border: "1px solid green" }}></div>
            <div style={{ width: 200, height: 300, border: "1px solid green" }}></div>
        </div>
    )
}

const User = () => {
    return (
        <div>
            User Info:
            <div style={{ border: "1px solid black", padding: 20 }}>
                <Outlet />
            </div>
        </div>
    )
}

const UserInfo = () => {
    let { userId, name } = useParams()
    return (
        <div>
            <h1>{userId}</h1>
            <h2>{name}</h2>
            {/* <h3>{age}</h3> */}
        </div>
    )
}


const Book = () => {
    return (
        <h1>Books</h1>
    )
}

const Auth = () => {
    return (
        <h1>Auth</h1>
    )
}

const Profile = () => {
    return (
        <h1>Profile</h1>
    )
}

class Controller extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            // <Router>
            //     <Routes>
            //         <Route element={<Layout />}>
            //             <Route index path="/" element={<Home />} />
            //             <Route path="/users" element={<User />}>
            //                 {/* v6的版本没有可选参数提供使用, 除非在编写一行参数 */}
            //                 <Route path=":userId/:name/:age" element={<UserInfo />} />
            //                 {/* 可选参数...好别扭 */}
            //                 <Route path=":userId/:name" element={<UserInfo />} />
            //             </Route>
            //         </Route>
            //         <Route path="/login" element={<Login />} />
            //     </Routes>
            // </Router>


            <Router>
                <Routes>
                    <Route path="/" element={<Main />}>
                        <Route path="home" element={<RealTimeCompared />} />
                        <Route path="book" element={<Book />} />
                        <Route path="auth" element={<Auth />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        )
    }
}

export {
    Controller
}