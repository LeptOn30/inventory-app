"use client"

import { Container, TextField, Button, Link, Typography } from "@mui/material"
import { Box, Snackbar, Alert, IconButton, inputAdornment } from "@mui/material"

import Grid from '@mui/material/Grid'

import { useState } from "react"


const RegisterPage = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackBarSeverity, setSnackBarSeverity] = useState("sucess")


    return (

        <Container maxWidth="xxl">
            <Grid container justifyContent="center" alignItems="center"
                sx={{
                    minHeight: "100vh"
                }}
            >
                <Grid item size={12} md={6}>
                    <Box component="form"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            p: 3
                        }}>

                        <Typography variant="h4" gutterBottom>
                            Register
                        </Typography>

                        <TextField
                            label="Name"
                            variant="outlined"
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: 'primary' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'lightblue',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'darkblue',
                                    },
                                },
                            }}
                        />

                        <TextField
                            label="Phone"
                            variant="outlined"
                            margin="normal"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: 'primary' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'lightblue',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'darkblue',
                                    },
                                },
                            }}
                        />

                        <TextField
                            label="Email"
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: 'primary' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'lightblue',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'darkblue',
                                    },
                                },
                            }}
                        />

                        <TextField
                            label="Password"
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: 'primary' },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'blue',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'lightblue',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'darkblue',
                                    },
                                },
                            }}
                        />

                    </Box>

                </Grid>

            </Grid>

        </Container>

    )

}


export default RegisterPage