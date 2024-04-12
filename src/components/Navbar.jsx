import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import logo from '../assets/logo/1.png';

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo a la izquierda */}
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src={logo} alt="Logo" style={{ width: 50, marginRight: 10 }} />
                </IconButton>

                {/* Nombre del blog en el centro */}
                <Typography variant="h3" style={{ flexGrow: 1, textAlign: 'center' }}>
                    EM News
                </Typography>

                {/* Botón "Suscríbete" a la derecha */}
                <Button color="inherit">Suscríbete</Button>
            </Toolbar>
        </AppBar>
    );
}
