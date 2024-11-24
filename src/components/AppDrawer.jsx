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

export default function TemporaryDrawer() {
    const { showDrawer, setShowDrawer, auth, setAuth } = useApp();

    const toggleDrawer = (newOpen) => () => {
        setShowDrawer(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(false)}>
                <Box sx={{ height: 200, background: grey[500]}}></Box>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
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
                  <ListItemButton>
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
                  <ListItemButton>
                      <ListItemIcon>
                          <RegisterIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Register"/>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={() => setAuth(true)}>
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
