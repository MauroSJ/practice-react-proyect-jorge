import { useState } from 'react'
import { TextField,Grid, Typography, Button } from '@mui/material'
import { useFormik } from 'formik'
import "./Formulario.css"
import * as Yup from "yup"



const Formulario = () => {
  
  let valoresIniciales = {
    nombre: "",
    email: "",
    contraseña: ""
  }
  
  const enviarForm = (data)=>{
    console.log(data)
  }
  
  
  const {handleSubmit,handleChange, values , setFieldValue, errors} = useFormik({
    initialValues: valoresIniciales,

    validationSchema: Yup.object({
      nombre: Yup.string().required("Debes ingresar un nombre"),
      email: Yup.string().required("Debes ingresar un email"),
      contraseña: Yup.string().required("Debes ingresar una contraseña")
    }),

    onSubmit: enviarForm
  })


  return (
    <div>

      <Typography color={"primary"} variant='h2' align='center'>Formulario de registro</Typography>

      <form className='form-container' onSubmit={handleSubmit}>

        <Grid container justifyContent={"space-evenly"} alignItems={"center"} spacing={2} sx={{width:"100%"}}>

          <Grid item xs={12} md={7}>
           <TextField type='text' label="Ingrese su nombre" variant="outlined" fullWidth /*name='nombre'*/ onChange={(e)=>{
            setFieldValue("nombre", e.target.value)
           }} value={values.nombre} error={errors.nombre} helperText={errors.nombre}/>
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField type='email' label="Ingrese su email" variant="outlined" fullWidth name='email' onChange={handleChange} value={values.email} error={errors.email} helperText={errors.email}/>
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField type='password' label="Ingrese su contraseña" variant="outlined" fullWidth name='contraseña' onChange={handleChange} value={values.contraseña} error={errors.contraseña} helperText={errors.contraseña}/>
          </Grid>

        </Grid>

        <Button type='submit' variant="contained">Enviar</Button>
        
      </form>

    </div>
  )
}

export default Formulario