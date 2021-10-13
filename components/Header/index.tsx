import React from 'react';
import {IconButton, Paper} from "@material-ui/core";
import {
    Search as SearchIcon,
    SmsOutlined as SmsIcon,
    NotificationsNoneOutlined as NotificationIcon,
    CreateOutlined as CreateIcon,
    AccountCircleOutlined as AvatarIcon,
    MenuRounded as BurgerIcon
} from '@material-ui/icons';
import styles from "./Header.module.scss"

const Header: React.FC = () => {
    return (
        <Paper classes={{root: styles.root}} elevation={0}>
            <div className={"d-flex align-center"}>
                <IconButton>
                    <BurgerIcon/>
                </IconButton>
                <div className={styles.logo}>K</div>
                <div><SearchIcon/><input type="text"/></div>
                <IconButton><CreateIcon/></IconButton>
            </div>
            <div>
                <IconButton>
                    <SmsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <IconButton>
                    <AvatarIcon/>
                </IconButton>
            </div>
        </Paper>
    );
};

export default Header;