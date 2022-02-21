import React from 'react';

//IMAGE
import bannerlogo from '../images/bannerlogo.svg';

//MUI
import { Box, Button, Container, Link, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';


const Home = () => {
    return (
        <Container>
            <Box sx={{ textAlign: "center" }}>
                <Box mt={4} mb={4} pt={3} pb={3} style={{ backgroundColor: "#bbdefb", borderRadius: "20px" }}>
                    <Box justifyContent="center" mb={2}>
                        <Box sx={{ fontSize: 'h4.fontSize', fontWeight: 'regular' }}>
                            Multilingual Text Analyzer and Summarization Engine
                        </Box>
                    </Box>
                    <img src={bannerlogo} alt="banner" style={{ height: 230, width: 300 }} />
                    <Box mt={2}>
                        <Typography variant='body1' sx={{ mx: 4 }}>
                            Propelled by the modern technological innovations, data is the most important factor today. Our world is parachuted by the gathering and dissemination of huge amounts of textual data. To undestand such textual data circulating in the digital space and achieve fluent passing of the intended messages in short time, we have developed <strong>MTASE</strong>, a tool that uses complex machine learning algorithms at its core to automatically shorten longer texts, deliver accurate summaries and related statistics.
                        </Typography>
                    </Box>
                    <Box mt={5} fontSize="h6.fontSize" fontWeight={400} fontFamily="Monospace">
                        This app is built by: <br /> 
                        <Link href="https://github.com/namanshah01" color="inherit" target="_blank" rel="noopener" underline="hover">Naman Shah</Link>, {" "}
                        <Link href="https://github.com/VirajPatidar" color="inherit" target="_blank" rel="noopener" underline="hover">Viraj Patidar</Link>, {" "}
                        <Link href="https://github.com/VedantNakrani" color="inherit" target="_blank" rel="noopener" underline="hover">Vedant Nakrani</Link> {" and "}
                        <Link href="https://github.com/atharvadpatil" color="inherit" target="_blank" rel="noopener" underline="hover">Atharva Patil</Link>
                    </Box>
                    <Box mt={3}>
                        <Link href="https://github.com/VirajPatidar/MTASE-frontend" color="inherit" target="_blank" rel="noopener" underline="hover">
                            <Button
                                variant="outlined"
                                display="inline"
                                color="inherit"
                                startIcon={<GitHubIcon />}
                            >
                                Source Code
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;