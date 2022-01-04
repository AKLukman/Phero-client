import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// import './AddProducts.css';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import { Button, FormControl, Input, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Grid } from '@mui/material';
const MakeProfile = () => {
    // const { register, handleSubmit, reset } = useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [about, setAbout] = useState('');
    const [demosite, setDemoSite] = useState('');
    const [gigone, setGigOne] = useState(null);
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
        formData.append('speciality', speciality);
        formData.append('about', about);
        formData.append('demosite', demosite);
        formData.append('profilepic', profilepic);
        formData.append('gigone', gigone);


        fetch('http://localhost:5000/sellerProfile', {
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
                        <FormControl variant="outlined" style={{ marginTop: '10px', width: '75%' }}>
                            <InputLabel required id="demo-simple-select-standard-label">Speciality</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                onChange={e => setSpeciality(e.target.value)}
                                label="Age"
                            >
                                <MenuItem value="">
                                    {/* <em>None</em> */}
                                </MenuItem>
                                <MenuItem value={'Frontend development'}>Frontend development</MenuItem>
                                <MenuItem value={'Backend development'}>Backend development</MenuItem>
                                <MenuItem value={'Fullstack development'}>Fullstack development</MenuItem>
                            </Select>
                        </FormControl>
                        <TextareaAutosize
                            onChange={e => setAbout(e.target.value)}
                            maxRows={10}
                            aria-label="maximum height"
                            placeholder="Details description"
                            variant="standard"
                            style={{ width: '75%', marginTop: '10px', height: '140px' }}
                        />

                    </Grid>

                    <Grid item md={6}>

                        <TextField
                            sx={{ width: '75%' }}
                            required
                            id="standard-basic"
                            label="Demo site link"
                            onChange={e => setDemoSite(e.target.value)}
                            name="site"
                            variant="outlined"
                        />
                        <p style={{ marginTop: '10px' }} >Profile's Pic <Input

                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={e => setProfilePic(e.target.files[0])}

                        /></p>

                        <p style={{ marginTop: '10px' }} >Gig Image <Input

                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            onChange={e => setGigOne(e.target.files[0])}

                        /></p>



                    </Grid>
                </Grid>
                <Button style={{ width: '50%', marginLeft: '240px' }} variant="contained" type="submit">
                    Submit
                </Button>
            </form>

        </div>
    );
};

export default MakeProfile;







{/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} defaultValue={user.displayName} />
                <input {...register("country")} placeholder="Country" />
                <textarea {...register("about")} placeholder="Details Description" />
                <select style={{ width: '50%', marginBottom: '10px' }} {...register("skill")} placeholder="Skill">
                    <option value="Fullstack Development">Fullstack Development</option>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="Backend Development">Backend Development</option>
                </select>
                <input multiple {...register("profileImg")} type="file" placeholder="Profile img" />
                <input {...register("slideImg")} placeholder="slide img link" />
                <input {...register("siteLink")} placeholder="Web site link" />
                <input type="submit" />
            </form> */}