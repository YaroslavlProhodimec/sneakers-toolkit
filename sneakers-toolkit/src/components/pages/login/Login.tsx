import React from 'react'
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {Navigate} from "react-router-dom";
import {fetchLogin} from "../../../redux/login/asyncActions";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const login = useAppSelector(state => state.login.isInitialzed)

  const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(fetchLogin(values))

        },
    })
 if(login){
        return <Navigate to={'/'}/>
    }

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'} sx={{mt:'130px'}}>
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormLabel>

                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>
                <FormGroup>
                    <TextField type={'email'} label="Email" margin="normal"
                               {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email ? <div style={{color:'red'}}>{formik.errors.email}</div> : null}
                    <TextField type="password" label="Password"
                               margin="normal"
                               {...formik.getFieldProps('password')}
                    />
                    <FormControlLabel label={'Remember me'} control={<Checkbox/>}/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
            </form>
        </Grid>
    </Grid>
}