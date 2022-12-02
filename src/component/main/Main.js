import React from 'react' 
import { Menu, Icon, Switch } from 'antd'
import {Outlet, Link} from 'react-router-dom'
import './layout.css'


const { SubMenu } = Menu.SubMenu

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = e => {
        console.log("info", e)
    }

    render() {
        return (
            <div className="wrapper">
                <div className="menu">
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        
                        <Menu.SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="1">
                                <Link to="home">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="book">Books</Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="auth">Auth</Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="profile">Profile</Link>
                            </Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </div>

                <div className="context">
                    <div className="header"></div>
                    <div className="main">
                        <Outlet />
                    </div>
                </div>
            </div>
        )
    }
}

export {
    Main
}