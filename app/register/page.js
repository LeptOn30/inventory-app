"use client"

import { Container, TextField, Button, Link, Typography } from "@mui/material"
import { Box, IconButton, Tooltip } from "@mui/material"

import Grid from '@mui/material/Grid'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import InputAdornment from '@mui/material/InputAdornment';

import { blueGrey, red } from '@mui/material/colors'

import { useState, useEffect } from "react"


import { currentTheme } from "../layout"


const RegisterPage = () => {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const [openSnackBar, setOpenSnackBar] = useState(false)
    const [snackBarMessage, setSnackBarMessage] = useState("")
    const [snackBarSeverity, setSnackBarSeverity] = useState("sucess")

    const [adjustColor, setadjustColor] = useState("primary")


    useEffect(() => {
        setadjustColor(
            (currentTheme === "system" && window.matchMedia('(prefers-color-scheme: light)').matches) ||
                currentTheme === "light" ? "primary" : blueGrey[50]

        )
    }, []);




    return (

        <Container maxWidth="lg">
            <Grid container spacing={2}
                justifyContent="center"
                alignItems="center"
                size={{ xs: 12, md: 6 }}
                sx={{
                    minHeight: "100vh",
                }}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box component="form"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        sx={{
                            p: 3,
                        }}>

                        <Typography variant="h4" gutterBottom>
                            Register
                        </Typography>

                        <TextField
                            label="Name"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: adjustColor },
                                label: { color: adjustColor },
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
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: adjustColor },
                                label: { color: adjustColor },
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
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: adjustColor },
                                label: { color: adjustColor },
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
                            fullWidth
                            variant="outlined"
                            type={showPassword ? "text" : "password"}
                            margin="normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            color="primary"
                            sx={{
                                input: { color: adjustColor },
                                label: { color: adjustColor },
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
                                }
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Tooltip title="Click to toggle password visibility">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                color="primary"
                                                sx={{
                                                    input: { color: adjustColor },
                                                    label: { color: adjustColor },
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
                                                    }
                                                }}
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </Tooltip>
                                    </InputAdornment>
                                )
                            }}
                        />

                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            color="primary"
                            sx={{
                                mt: 2,
                                backgroundColor: "blue",
                                '&:hover': {
                                    backgroundColor: "darkblue",
                                }

                            }}
                        >
                            Register
                        </Button>

                        <Link 
                            href="/login" 
                            variant="body2" 
                            color="primary"
                            sx={{
                                mt: 2,
                                color: adjustColor,
                            }}
                        >
                            Already have an account? Login
                        </Link>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{
                            width: '100%',
                            height: '100vh',

                            display: { xs: 'none', md: 'block' },
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/pos.jpg"
                            alt="Register image"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>

        </Container>

    )

}


export default RegisterPage