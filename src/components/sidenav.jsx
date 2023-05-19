import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';
import HomePage from '../pages/home';
import AboutUs from '../pages/About_Us'
import Jobs from '../pages/Jobs'
import Profile from '../pages/Profile'
import Recruitment from '../pages/Recruitment'
import Referral from '../pages/Referral'
import Resources from '../pages/Resources'
import ScanResume from '../pages/Scan_Resume'
import TrainingPrograms from '../pages/Training_Programs'
import logo from "../static/images/logo.png"
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [selectedItem, setSelectedItem] = React.useState("Home"); 
  const navigate = useNavigate();

  const customTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: red[500],
      },
      secondary: {
        main: blue[500],
      },
    },
  });

  const [listItems] = React.useState([
    {
      text: "Home",
      url: "/",
      icon: <MailIcon />
    },
    {
      text: "Jobs",
      url: "/jobs",
      icon: <MailIcon />
    },
    {
      text: "Resources",
      url: "/resources",
      icon: <MailIcon />
    },
    {
      text: "Recruitment",
      url: "/recruitment",
      icon: <MailIcon />
    },
    {
      text: "Training Programs",
      url: "/training-programs",
      icon: <MailIcon />
    },
    {
      text: "Referral",
      url: "/referral",
      icon: <MailIcon />
    },
    {
      text: "Scan Your Resume",
      url: "/scan-resume",
      icon: <MailIcon />
    },
    {
      text: "About Us",
      url: "/about-us",
      icon: <MailIcon />
    },
    {
      text: "Profile",
      url: "/profile",
      icon: <MailIcon />
    },
  ]);

  const handleListItemClick = (url, itemText) => {
    setSelectedItem(itemText); 
    navigate(url);
  };

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={() => setOpen(!open)}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <List>
              {listItems.map((item, i) => (
                <ListItem disablePadding sx={{ display: 'block' }} key={i}>
                  <ListItemButton
                    onClick={() => handleListItemClick(item.url, item.text)} // Update the onClick handler
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                      backgroundColor: selectedItem === item.text && open ? 'rgba(0, 0, 0, 0.1)' : 'transparent', // Highlight the selected item
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {open ? item.icon : <item.icon.type />}
                    </ListItemIcon>
                    {open && <ListItemText primary={item.text} />}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
    </>
  );
}
