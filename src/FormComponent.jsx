import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const FormComponent = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!name) tempErrors.name = "Name is required";
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!age) {
            tempErrors.age = "Age is required";
        } else if (isNaN(age)) {
            tempErrors.age = "Age must be a number";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Age:", age);
            setName('');
            setEmail('');
            setAge('');
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-primary-subtle">
            <div className="bg-white p-4 border border-5 border-primary-subtle rounded-4 shadow" style={{ width: '500px' }}>
                <Typography variant="h5" component="h2" className="mb-4 fw-bold text-center text-primary">
                    Registration Form
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <TextField
                        label="Age"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        error={!!errors.age}
                        helperText={errors.age}
                    />
                    <Button variant="contained"  type="submit"  className="btn btn-primary mt-4 w-100 text-white fw-bold mt-3">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default FormComponent;
