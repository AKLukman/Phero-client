import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import Textarea from 'muicss/lib/react/textarea';
const UpdateSeller = () => {
    const { sellerId } = useParams();
    const [seller, setSeller] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/sellerProfile/${sellerId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSeller(data))
    }, []);



    // update title
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateSeller = { name: updateName, country: seller.country, about: seller.about, speciality: seller.speciality, demosite: seller.demosite };
        setSeller(updateSeller)
    }

    const handleCountryChange = e => {
        const updateCountry = e.target.value;
        const updateSeller = { name: seller.name, country: updateCountry, about: seller.about, demosite: seller.demosite, speciality: seller.speciality };
        setSeller(updateSeller)
    }
    const handleSpecialityChange = e => {
        const updateSpeciality = e.target.value;
        const updateSeller = { name: seller.name, country: seller.country, speciality: updateSpeciality, about: seller.about, demosite: seller.demosite };
        setSeller(updateSeller)
    }
    const handleDemoChange = e => {
        const updateDemo = e.target.value;
        const updateSeller = { name: seller.name, country: seller.country, speciality: seller.speciality, about: seller.about, demosite: updateDemo };
        setSeller(updateSeller)
    }
    const handleAboutChange = e => {
        const updateAbout = e.target.value;
        const updateSeller = { name: seller.name, country: seller.country, speciality: seller.speciality, about: updateAbout, demosite: seller.demosite };
        setSeller(updateSeller)
    }

    const handleUpdateService = e => {
        const url = `http://localhost:5000/sellerProfile/${sellerId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated successfully')
                    setSeller({});
                }
            })
        e.preventDefault();
    }



    return (
        <div>
            <h2>This is Update Seller Page{sellerId}</h2>
            <h3>Title: {seller.name}</h3>

            <form onSubmit={handleUpdateService}>

                <TextField
                    onChange={handleNameChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={seller.name || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleCountryChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={seller.country || ''}
                    type="text"
                    variant="standard"
                />
                <TextField
                    onChange={handleSpecialityChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={seller.speciality || ''}
                    type="text"
                    variant="standard"
                />

                <TextField
                    onChange={handleDemoChange}
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={seller.demosite || ''}
                    type="text"
                    variant="standard"
                />

                <textarea
                    className="form-control"
                    onChange={handleAboutChange}
                    style={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    value={seller.about || ''}
                    variant="standard"
                />

                <Button variant="contained" type="submit" sx={{ width: '50%', marginLeft: '8px', m: 1 }}>Update</Button>
            </form>
        </div >
    );
};

export default UpdateSeller;