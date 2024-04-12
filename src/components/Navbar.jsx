import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo a la izquierda */}
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <img src='' alt="Logo" style={{ width: 40, marginRight: 10 }} />
                </IconButton>

                {/* Nombre del blog en el centro */}
                <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
                    Nombre del Blog
                </Typography>

                {/* Botón "Suscríbete" a la derecha */}
                <Button color="inherit">Suscríbete</Button>
            </Toolbar>
        </AppBar>
    );
}
