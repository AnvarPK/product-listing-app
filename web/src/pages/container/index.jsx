import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppRoutes from '../../routes';
import { NavLink } from 'react-router-dom';
import { APP_CONSTANTS } from '../../appconsts';
import { BrowserRouter as Router } from "react-router-dom"
import { useStyles } from './style';
import { Container } from '@mui/material';


const AppContainer = () => {
    const classes = useStyles();
    return (
        <>
            <Router>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Product List App
                            </Typography>
                            <NavLink to={APP_CONSTANTS.ROUTES.PRODUCTS} color="inherit" className={classes.navLink}>
                                <Button color="inherit">Products</Button>
                            </NavLink>
                            <NavLink to={APP_CONSTANTS.ROUTES.CATEGORY_CREATE} color="inherit" className={classes.navLink} >
                                <Button color="inherit"> New Category </Button></NavLink>
                            <NavLink to={APP_CONSTANTS.ROUTES.PRODUCT_CREATE} color="inherit" className={classes.navLink}>
                                <Button color="inherit">New Product</Button>  </NavLink>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Container maxWidth={false}>
                    <AppRoutes />
                </Container>
            </Router>
        </>
    );
}

export default AppContainer;
