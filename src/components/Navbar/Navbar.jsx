import { AppBar, Button, ButtonGroup, Toolbar, Typography } from '@mui/material';
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';

const Navbar = () => {
    return (<AppBar sx={{ backgroundColor: "#673ab7" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
            <Typography fontSize={'25px'} fontFamily={'monospace'}>
                Restart
            </Typography>

            <ButtonGroup color='inherit' size='large' variant="text" aria-label="text button group">
                <Button>Home</Button>
                <Button>Products</Button>
                <Button>Help</Button>
            </ButtonGroup>

            <CartWidget />

        </Toolbar>
    </AppBar>);
}

export default Navbar;