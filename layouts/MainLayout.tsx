import React, {FunctionComponent} from 'react';
import {Grid, Paper} from "@mui/material";
import {Box} from "@mui/system";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

type MainLayoutProps = {
    children: React.ReactNode | React.ReactChildren;
    hideMenu?: boolean;
    hideComment?: boolean;
}

export const MainLayout: FunctionComponent<MainLayoutProps> = ({children, hideMenu = false, hideComment = false}) => {
    return (
        <Box p={2}>
            <Grid container spacing={2} justifyContent={"space-evenly"}>
                <Grid item lg={2}>
                    {!hideMenu && (
                        <Paper>
                            <MenuList>
                                <MenuItem>
                                    <ListItemIcon>
                                        <SendIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        Menu 1
                                    </Typography>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <PriorityHighIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        Menu 2
                                    </Typography>
                                </MenuItem>
                                <MenuItem>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="inherit" noWrap>
                                        Menu 3
                                    </Typography>
                                </MenuItem>
                            </MenuList>
                        </Paper>
                    )}
                </Grid>
                <Grid item xs>
                    <Paper>{children}</Paper>
                </Grid>
                <Grid item lg={3}>
                    {!hideComment && (
                        <Paper>xs=3</Paper>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
};
export default MainLayout