/** @format */

import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material';

import {
    Home as HomeIcon,
    Person as ProfileIcon,
    PersonAdd as RegisterIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
} from '@mui/icons-material';

import { grey } from '@mui/material/colors';
import { useApp } from '../AppProvider';
import { useNavigate } from 'react-router';

export default function TemporaryDrawer() {
    const { showDrawer, setShowDrawer, auth, setAuth } = useApp();
    const navigate = useNavigate();

    const toggleDrawer = (newOpen) => () => {
        setShowDrawer(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 300 }}
            role='presentation'
            onClick={toggleDrawer(false)}>
            <Box sx={{ height: 200 }}></Box>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate("/")}>
                    <ListItemIcon>
                        <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />

            { auth && (
                <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/profile")}>
                      <ListItemIcon>            
                          <ProfileIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Profile"/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setAuth(false)}>
                      <ListItemIcon>
                          <LogoutIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Logout"/>
                  </ListItemButton>
                </ListItem>
              </List>
            )}

            { !auth && (
                <List>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/register")}>
                      <ListItemIcon>
                          <RegisterIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Register"/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => navigate("/Login")}>
                      <ListItemIcon>
                          <LoginIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Login"/>
                  </ListItemButton>
                </ListItem>
              </List>
            )}
            
        </Box>
    );

    return (
        <div>
            <Drawer
                open={showDrawer}
                onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
