import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const breadcrumbNameMap = {
    "/home": "首页",
    "/books": "表格",
    "/auth": "权限",
    "/profile": "个人信息"
}

const a2 = () => {
    return (
        <div>
            <Breadcrumb.Item key="home">
            Home
            </Breadcrumb.Item>
        </div>
    )
}


class NavBarMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="">Application Center</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export {
    NavBarMenu
}