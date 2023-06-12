import * as React from 'react';
import {useCallback} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Badge} from '@mui/material';
import {SearchParam} from "./miniHeaderComponent/search/SearchParam";
import {motion} from "framer-motion"
import {useAppSelector} from "../../redux/store";
import {selectorItems} from "../../redux/basket/selectors";
import {Link} from "react-router-dom";

type PropsHeaderType = {
    openBasket: () => void
    searchValue:string
    sentValue:(value: string) => void
}




export function Header({openBasket,sentValue,searchValue}: PropsHeaderType) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const order = useAppSelector(selectorItems)
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    },[])

    const handleMobileMenuClose = useCallback( () => {
        setMobileMoreAnchorEl(null);
    },[])

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();


    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {

        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >

            <MenuItem onClick={handleMenuClose}><Link style={{textDecoration:'none'}} to={'/login'}>Log-out</Link></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >


            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton

                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p >Profile</p>
            </MenuItem>
        </Menu>
    );


    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static"
                    sx={{background: 'linear-gradient(96.2deg, rgb(255, 230, 112) 10.4%, rgb(255, 100, 100) 43.8%, rgb(0, 93, 219) 105.8%)'}}>
                <Toolbar>

                    <motion.h1 style={{fontFamily:'Geometria'}}
                        animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,

                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        БАРХАТНЫЕ ТЯГИ
                    </motion.h1>
                    <SearchParam searchValue={searchValue} sentValue={sentValue} menuId={menuId}
                                 handleProfileMenuOpen={handleProfileMenuOpen}/>

                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>

                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>

                    </Box>

                    <IconButton onClick={openBasket} sx={{marginLeft: '7px'}}>
                        <Badge color={'secondary'} badgeContent={order}>
                            <ShoppingBasketIcon/>
                        </Badge>


                    </IconButton>
                </Toolbar>

            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}