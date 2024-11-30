/** @format */

import { Box, Typography, OutlinedInput, Button } from '@mui/material';

import { useApp } from '../AppProvider';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';

export default function Login() {
    const { setAuth } = useApp();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitLogin = () => {
        setAuth(true);
        navigate('/Login');
    };

    return (
        <Box>
            <Typography variant='h3'>Register</Typography>
            <form onSubmit={handleSubmit(submitLogin)}>
                <OutlinedInput
                    {...register('username', { required: true })}
                    fullWidth
                    placeholder='username'
                    sx={{ mt: 2 }}
                />
                {errors.username && (
                    <Typography color='error'>username is required!</Typography>
                )}
                <OutlinedInput
                    {...register('email', { required: true })}
                    fullWidth
                    placeholder='email'
                    type='email'
                    sx={{ mt: 2 }}
                />
                {errors.email && (
                    <Typography color='error'>email is required!</Typography>
                )}
                <OutlinedInput
                    {...register('bio', { required: true })}
                    fullWidth
                    placeholder='bio'
                    sx={{ mt: 2 }}
                />

                <OutlinedInput
                    {...register('password', { required: true })}
                    fullWidth
                    placeholder='password'
                    type='password'
                    sx={{ mt: 2 }}
                />
                {errors.password && (
                    <Typography color='error'>password is required!</Typography>
                )}

                <Button
                    sx={{ mt: 2 }}
                    type='submit'
                    fullWidth
                    variant='contained'>
                    Submit
                </Button>
            </form>
        </Box>
    );
}
