import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"
import {  useHistory } from "react-router-dom"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Container,Typography,Button , Avatar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'

const Form =({setUser})=>{
   
    const schema = yup.object().shape({
        name:yup.string().required("Campo obrigatorio"),
        email: yup.string().required("Email obrigatorio").email("Email invalido"),
        password:yup.string().max(8,"Ate 8 caracteres").required("Campo Obrigatorio"),
        confirmPassword:yup.string().max(8,"Ate 8 caracteres").required("Confime a senha").oneOf([yup.ref("password")], "Senhas desiguais")
       
    }

    )
    const{register,handleSubmit,formState:{ errors }} = useForm({
        resolver:yupResolver(schema)
    })
    
    const history = useHistory()
   
    const onForm = (data) =>{
       
        setUser(data.name)
        console.log(data)
        history.push(`login/${data.name}`)
    }
       
    return(

        
        <Container maxWidth={false} sx={{display: "flex",
            justifyContent: "center",
            background: "#15072c",
            height:700}}>

        <CssBaseline/>

            <Box
            
            component="form"
            sx={{
                borderRadius: 3,
                width: 400,
                height: 580,
                backgroundColor: '#96a0ac',
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                justifyContent:'center',
                marginTop:5,
               
              '& .MuiTextField-root': { m: 2, width: '25ch' },
            }}
            spacing={4} >
                
                <Avatar  sx={{  mt: 3 ,bgcolor: "#4f57ac" }} src="/broken-image.jpg" />
                <Typography sx={{color:"#4f57ac" }} >Cadastre-se</Typography>
                <TextField 
                id="standard-basic-name" label="Nome" variant="standard" 
                {...register("name")}
                helperText={errors.name?.message}
                error={!!errors.name?.message}/>

                <TextField i
                d="standard-basic-email" label="E-mail" variant="standard" 
                {...register("email")}
                helperText={errors.email?.message}
                error={!!errors.email?.message}/>

                <TextField id="standard-password-input-password" type="password" label="Senha" variant="standard" 
                 {...register("password")} 
                 helperText={errors.password?.message}
                 error={!!errors.password?.message}/>

                <TextField id="standard-password-input-confirmed" type="password" label="Confirma Senha" variant="standard" 
                {...register("confirmPassword")}
                helperText={errors.confirmPassword?.message}
                error={!!errors.confirmPassword?.message}/>
                <Button  onClick={ handleSubmit(onForm)} variant="outlined" sx={{ mt: 2 }}>CADASTRAR</Button>
             </Box>
        </Container>


    )
}
export default Form