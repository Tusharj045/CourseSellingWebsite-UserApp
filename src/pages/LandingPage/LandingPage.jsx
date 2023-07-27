import React from 'react';
// import Button from '@mui/material/button'
import { Card, Box, Typography, Button,  Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material'
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
//color: #646cff;
const LandingPage = () => {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
            <Grid container 
                rowSpacing={4} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                padding={'2% 4%'}
                alignItems={'center'}
                sx={{ marginTop: { xs: '8%', md: '0px', lg: '0px', xl: '0px' } }}
                >
                    <Grid item xs={12} lg={6} md={7} xl={6}>
                        <Typography className={styles.heading} sx={{ fontSize: { xs: '30px', md: '60px', lg: '70px', xl: '70px' } }}>Welcome to Learn-Era!</Typography>
                        <Typography  className={styles.subHeading}  sx={{ fontSize: { xs: '20px', md: '50px', lg: '60px', xl: '60px' } }}>Your one stop solution to learning anything ..!</Typography>
                        <div>
                            <Link to="/signup">
                                <Button variant="contained" sx={{ width: { xs: 145, md: 180, lg: 180, xl: 200 }, padding: 2, margin: 1, fontSize: { xs: 14, md: 14, lg: 16, xl: 18 }}}>Join for free</Button>
                            </Link>
                            <Link to="/login">
                                <Button variant="outlined" sx={{ width: { xs: 145, md: 180, lg: 180, xl: 200 }, padding: 2, margin: 1, fontSize: { xs: 14, md: 14, lg: 16, xl: 18 }}}>Login</Button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6} md={4} xl={6}>
                        <Box
                            component="img"
                            sx={{
                            maxHeight: { xs: 380, md: 430, lg: 700, xl: 1000},
                            maxWidth: {  xs: 380, md: 430, lg: 700, xl: 1000},
                            }}
                            alt="The house from the offer."
                            src="https://www.weareteachers.com/wp-content/uploads/Rosen-Coding_blogimage-1.png"
                        />
                    </Grid>
                    <Grid item xs={12} lg={12} md={12} xl={12} justifyContent={'center'}>
                        
                        
                    </Grid>
                </Grid>
                <Button variant="outlined" sx={{ minWidth: 200, padding: 2, margin: 2, fontSize: 20}} href='https://course-selling-website-admin-app.vercel.app/'>Become tutor</Button>
            </div>
        </div>
    )
}

export default LandingPage
