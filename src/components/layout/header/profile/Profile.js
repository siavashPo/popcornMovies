import Link from "next/link";
import {Avatar, Drawer, Dropdown, Menu} from "antd";
import imgSrc from "../../../../helper/imgSrc";
import {useState} from "react";
import classes from "./Profile.module.scss";
function Profile({personality}) {
    const {user, logout} = personality
    const [visible, setVisible] = useState(false);

    const showDrawer = ({type, onClick}) => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const menu = (
        <Menu>
            <Menu.Item key='1'>
                <a onClick={showDrawer}>
                    Profile
                </a>
                <Drawer className={classes.root} style={{display: 'flex'}} width='378' title={`Welcome ${user?.username}`} placement="right"
                        onClose={onClose} visible={visible}>
                    <div>
                        {<Avatar size={"large"} src={imgSrc(user?.avatar.tmdb.avatar_path, 'w500')}/>}
                        <span style={{
                            color: 'yellow',
                            marginLeft: '13px'
                        }}>{user?.name ? `Name : ${user?.name}` : `UserName : ${user?.username}`}</span>
                    </div>

                    <p>{`country: ${user?.iso_3166_1}`}</p>
                    <p>{`langues: ${user?.iso_639_1}`}</p>
                </Drawer>
            </Menu.Item>
            <Menu.Item key='2'>
                <Link href='/user/myList'>
                    <a>My List</a>
                </Link>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key='3' onClick={logout}>Logout</Menu.Item>
        </Menu>
    )

    return (
        <div>
            <Dropdown overlay={menu} trigger={'click'} overlayStyle={{width: '7%'}}
                      placement='bottomCenter'>
                <Avatar src={imgSrc(user.avatar.tmdb.avatar_path, 'w185')}/>
            </Dropdown>
        </div>
    )
}
export default Profile