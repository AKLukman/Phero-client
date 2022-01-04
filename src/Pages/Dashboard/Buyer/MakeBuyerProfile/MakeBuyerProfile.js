import React, { useState } from 'react';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Grid } from '@mui/material';
const MakeBuyerProfile = () => {
    // const { register, handleSubmit, reset } = useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [about, setAbout] = useState('');
    const [profilepic, setProfilePic] = useState(null);
    const { user } = useAuth();



    const handleSubmit = e => {
        e.preventDefault();
        if (!profilepic) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('country', country);
        formData.append('about', about);
        formData.append('profilepic', profilepic);



        fetch('http://localhost:5000/buyerProfile', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // setSuccess('Doctor added successfully')
                    console.log('added successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2 className="pt-1 text-center pb-4">Make  Profile</h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} style={{ textAlign: 'center' }}>
                    <Grid item md={6}>
                        <TextField
                            sx={{ width: '75%' }}
                            id="standard-basic"
                            label="Name"
                            defaultValue={user.displayName}
                            onBlur={e => setName(e.target.value)}
                            name="name"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            sx={{ marginTop: '10px', width: '75%' }}
                            id="standard-basic"
                            label="Email"
                            defaultValue={user.email}
                            onBlur={e => setEmail(e.target.value)}
                            name="email"
                            variant="outlined"
                        />
                        <br />
                        <TextField
                            sx={{ width: '75%', marginTop: '10px' }}
                            required
                            id="standard-basic"
                            label="Country"
                            onChange={e => setCountry(e.target.value)}
                            name="country"
                            variant="outlined"
                        />



                    </Grid>

                    <Grid item md={6}>
                        <TextareaAutosize
                            onChange={e => setAbout(e.target.value)}
                            maxRows={10}
                            aria-label="maximum height"
                            placeholder="Details description"
                            variant="standard"
                            style={{ width: '75%', height: '140px' }}
                        />

                        <p style={{ marginTop: '10px' }} >Profile's Pic <Input

                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={e => setProfilePic(e.target.files[0])}

                        /></p>





                    </Grid>
                </Grid>
                <Button style={{ width: '50%', marginLeft: '240px', marginTop: '10px' }} variant="contained" type="submit">
                    Submit
                </Button>
            </form>

        </div>
    );
};

export default MakeBuyerProfile;







