import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';


const Block = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };

        fetch('http://localhost:5000/users/block', {
            method: 'PUT',
            headers: {

                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }

            })



    }
    return (
        <div>
            <h2>Blcok user</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField

                    sx={{ width: '75%', m: 1 }}
                    onBlur={handleOnBlur}
                    label="Email"
                    name="email"
                    type="email"
                    variant="standard"
                />
                <Button type="submit" variant="contained">Block User</Button>
            </form>
            {
                success && <Alert severity="success">Blocked succesfully!</Alert>

            }

        </div>
    );
};

export default Block;