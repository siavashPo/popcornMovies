import Link from "next/link";
import {Menu, Dropdown, Row, Col, Button, Typography} from 'antd';
const { Title } = Typography;
import classes from "./Header.module.scss";
import Profile from "./profile/Profile";
import login from '../../../service/Login'
import {useContext} from "react";
import {UserContext} from "../../../context/UserContext";

function Header() {
 const {user, logout} = useContext(UserContext)
    const movie = (
        <Menu>
            <Menu.Item key="0">
                <Link href='/movie/popular'>
                    <a>
                        Popular
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link href='/movie/nowPlaying'>
                    <a>
                        Now Playing
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    );
    const tvShow = (
        <Menu>
            <Menu.Item key="0">
                <a>
                    Popular
                </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a>
                    Now Playing
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className={classes.root}>
            <Row>
                <Col offset={1} md={2}>
                    <Link href='/'>
                        <a>
                            <Title level={2}>
                                POPCORN MOVIES
                            </Title>
                        </a>
                    </Link>

                </Col>
                <Col md={1}>
                    <Link href='/'>
                        <img alt='logo' style={{height: '30px'}} src='/favicon.ico.svg'/>
                    </Link>
                </Col>
                <Col offset={1} md={2}>
                    <Dropdown placement='bottomCenter' overlay={movie}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            Movie
                        </a>
                    </Dropdown>
                </Col>
                <Col md={2}>
                    <Dropdown placement='bottomCenter' overlay={tvShow}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                           Tv-SHOW
                        </a>
                    </Dropdown>
                </Col>
                <Col md={2}>
                    <Dropdown placement='bottomCenter' overlay={''}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            People
                        </a>
                    </Dropdown>
                </Col>
                <Col md={2}>
                    <Dropdown placement='bottomCenter' overlay={''}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            More
                        </a>
                    </Dropdown>
                </Col>
                <Col offset={9} md={2}>
                    {user ? (
                        <Profile personality={{user, logout}}/>
                    ) :
                        (
                    <Button onClick={login} type="ghost" shape='round' size='middle'>
                        Login/Signup
                    </Button>
                        )}
                </Col>
            </Row>
        </div>
    )
}

export default Header