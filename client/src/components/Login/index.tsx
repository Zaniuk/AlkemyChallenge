import { Box, TextField, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from '../../context/UserProvider'

function LoginComponent() {
    const {login} :any = React.useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        login({email, password}).then(() => {
            navigate('/')
        }).catch((err : any) => {
            console.log(err)
        });
    }
  return (
    <Box sx={{
        maxWidth: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh"

    }}>
        <Typography variant="h4">Login</Typography>
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
            >
                Login
            </Button>

        </form>

    </Box>
  )
}

export default LoginComponent