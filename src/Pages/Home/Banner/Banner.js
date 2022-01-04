import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/header.jpg'
import './Banner.css';


const shoesBanner = {
    background: `url(${banner})`,
    backgroundColor: 'rgba(45,58,74,0.8)',
    backgroundBlendMode: 'darken, luminosity',
    width: '100%',
    // height: '500px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',




}

const Banner = () => {
    return (
        <Box sx={{ width: 1 }}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)">
                <Box gridColumn="span 12" style={shoesBanner}>
                    <Typography variant="h2" style={{ color: 'white', textAlign: 'center', marginTop: '100px', fontSize: '50px', fontWeight: '700', marginBottom: '30px' }}>
                        Search and hire talented <br />
                        independent professionals
                    </Typography>
                    <Typography variant="p" style={{ color: 'white', fontWeight: '500', marginLeft: '460px' }}>
                        With our member-driven community of trusted freelancers
                    </Typography>
                    <br />
                    <Typography variant="p" style={{ color: 'white', fontWeight: '500', marginLeft: '460px' }}>
                        and all-in-one freelance business management system.
                    </Typography>

                    {/* <Typography variant="h1" style={{ color: 'white', textAlign: 'center', fontSize: '16px', fontWeight: '400', lineHeight: '26px', marginTop: '20px' }}>
                        Shome – Shoes have very qualityfull shoes.
                    </Typography> */}
                    <Box style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '50px' }}>
                        <Button className="banner-btn" style={{ fontSize: '14px', padding: '8px 13px', height: '34px', border: '2px solid #ffffff', borderRadius: '50px', color: 'white', fontWeight: '500', lineHeight: '24px', textTransform: 'uppercase' }}>view more</Button>
                    </Box>

                </Box>


            </Box>
        </Box>
    );
};

export default Banner;