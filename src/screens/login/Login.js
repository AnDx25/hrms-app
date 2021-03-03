import React, { useEffect, useState } from 'react';
/**For validation */
//-------------------------------------
import {useFormik} from 'formik';
import * as yup from 'yup'
//---------------------------- 

import Input from '../../components/input/Input'
// import Button from '../../components/button/Button'
import Button from '@material-ui/core/Button';

const Login=(props)=>{
    //Not Required because we are using formik now
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('')
    // const [errorMessage,setErrorMessage]=useState('')

    /**Hook for Formik which will provide validation over inputs */
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yup.object().shape({
            email: yup.string().required("Email can not be empty").email('Invalid email'),
            password:yup.string().required("Password can not be empty").matches({regex:/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
            message:"Weak Password"})}),
        onSubmit:(values=>{
            console.log(values)
            handleLoginClick()
        })
    })
    // useEffect(()=>{
    //     if(email!=='')
    //     {
    //         if(!email.includes('@'))
    //         {
    //             setErrorMessage("Invalid Email")
    //         }
    //         else
    //         {
    //             setErrorMessage('')
    //         }
    //     }

    // },[email,password])

    const handleLoginClick=()=>{
        const jwtToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem("accessToken",jwtToken)
        window.location.replace("/")
    }
    // const emailChangeHandler=(event)=>setEmail(event.target.value)
    // const passwordChangeHandler=(event)=>setPassword(event.target.value)
    const onBlur=(name)=>{
        formik.setFieldTouched(name,true)
    }
    const onChangeHandler=(name,value)=>{
        formik.setFieldValue(name,value)
    }
    //Not Required because we are using formik now
    // const onBlur=(name)=>{
       

    //     switch(name)
    //     {
    //         case "email":
               
    //             if(email!=='')
    //             {  
    //                 if(!email.includes('@'))
    //                 {
    //                     setErrorMessage({...errorMessage,email:"Invalid Email"})
    //                 }
    //                 else
    //                 {
    //                     setErrorMessage('')
    //                 }
    //             }
        

    //             break;
    //         case "password":
                
    //             if(password!=='')
    //             {
    //                 if(password.length<6)
    //                 {
    //                     setErrorMessage({...errorMessage,password:"Invalid password"})
    //                 }
    //                 else
    //                 {
    //                     setErrorMessage('')
    //                 }
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // }
    return(
    <div className="login">
        <div className="form-container">
            <div className="hrms-band">
                <h3>HRMS</h3>
            </div>
            <form className="form" onSubmit={formik.handleSubmit}>
                <div>
                   
                
                <Input classes={{inputComponentClassName:"login-input"}} value={formik.values.email} name="email" onChange={(event)=>onChangeHandler(event.target.name,event.target.value)} type="email" placeholder="Enter your email.." 
                onBlur={(event)=>onBlur(event.target.name)} onFocus={()=>console.log("On Focus")}
                errors={formik.errors.email}
                />

                <Input classes={{inputComponentClassName:"login-input"}} name="password" value={formik.values.password} onChange={(event)=>onChangeHandler(event.target.name,event.target.value)} type="password" placeholder="Enter your password.."
                onBlur={(event)=>onBlur(event.target.name)} onFocus={()=>console.log("On Focus")}
                errors={formik.errors.password}
                />
                </div>
                 {/* Custom Button
                 <Button type="submit" className="login-button">Login</Button> */}
                 <Button  type="submit" variant="contained" color="primary">SignIn</Button>
                 <Button type="submit" variant="outlined" color="secondary">SignUp</Button>

            </form>
        </div>
    
    </div>
    )
}
export default Login;