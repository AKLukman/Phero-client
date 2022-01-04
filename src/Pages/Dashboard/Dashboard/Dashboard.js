import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
// import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AddJob from '../AddJob/AddJob';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../ManageAllOrdes/AllOrders/AllOrders';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import UpdateOrders from '../ManageAllOrdes/UpdateOrders/UpdateOrders';
import AllProducts from '../ManageProducts/AllProducts/AllProducts';
import MakeProfile from '../Seller/MakeProfile/MakeProfile';
import ViewProfile from '../Seller/ViewProfile/ViewProfile';
import UpdateSeller from '../Seller/UpdateSeller/UpdateSeller';
import Block from '../Dashboard/Block/Block'
import MakeBuyerProfile from '../Buyer/MakeBuyerProfile/MakeBuyerProfile';
import ViewBuyerProfile from '../Buyer/ViewBuyerProfile/ViewBuyerProfile';


const drawerWidth = 240;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { role, logOut } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/"><Button>Home</Button></Link>

            {
                // role?.role === "block" && <Link style={{ textDecoration: 'none' }} to="/"><Button>Home</Button></Link>
            }

            {

                role?.role === 'seller' &&
                < Box >
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeProfile`}><Button>Make Profile</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/viewSeller`}><Button>View Profile</Button></Link>
                </Box>

            }

            {
                role?.role === 'buyer' &&
                < Box >
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addJob`}><Button>Add Job</Button></Link>

                    <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeBuyerProfile`}><Button>Make Profile</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/viewBuyerProfile`}><Button>View Profile</Button></Link>
                </Box>}
            {
                role?.role === 'admin' &&
                <Box>

                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link>
                    <br />
                    <Link style={{ textDecoration: 'none' }} to={`${url}/block`}><Button>Block User</Button></Link>

                    {/* <Link style={{ textDecoration: 'none' }} to={`${url}/allOrders`}><Button >Manage All Orders</Button></Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/allProducts`}><Button >Manage All Products</Button></Link>
 */}

                </Box>
            }
            <Button onClick={logOut} color="inherit">Logout</Button>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        {/* <DashboardHome></DashboardHome> */}
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route >
                    <Route path={`${path}/block`}>
                        <Block></Block>
                    </Route >
                    <Route path={`${path}/addJob`}>
                        <AddJob></AddJob>
                    </Route >

                    <Route path={`${path}/makeProfile`}>
                        <MakeProfile></MakeProfile>
                    </Route >
                    <Route path={`${path}/makeBuyerProfile`}>
                        <MakeBuyerProfile></MakeBuyerProfile>
                    </Route >





                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route >
                    <Route path={`${path}/viewSeller`}>
                        <ViewProfile></ViewProfile>
                    </Route>
                    <Route path={`${path}/viewBuyerProfile`}>
                        <ViewBuyerProfile></ViewBuyerProfile>
                    </Route>
                    <Route path={`${path}/updateSeller/:sellerId`}>
                        <UpdateSeller> </UpdateSeller>
                    </Route >
                    <Route path={`${path}/allProducts`}>
                        <AllProducts></AllProducts>
                    </Route >
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
