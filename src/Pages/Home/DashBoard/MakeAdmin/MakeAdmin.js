import React,{useState} from 'react';
import { Box, Typography, TextField, Button, Alert, AlertTitle} from '@mui/material';

const MakeAdmin = () => {

     //Email State
     const [email, setEmail] = useState('')
     const [success, setSucces] = useState(false)
     

     //onchange handler
     const handlerEmailOnChange = e =>{
          setEmail(e.target.value)
     }
     //Form Handler
     const handleAdminForm = e =>{

          const user = {email}

          fetch('http://localhost:5000/users/admin',{
               method : 'PUT',
               headers:{
                    'content-type':'application/json'
               },
               body: JSON.stringify(user)
          })
          .then(res => res.json())
          .then(data =>{
               if(data.modifiedCount){
                    setSucces(true)
               }
          })

          e.preventDefault()
     }
     return (
        <Box>
          <Typography variant='h4' sx={{textAlign:'center'}}>
               Make An Admin 
          </Typography>

          <form onSubmit={handleAdminForm}>
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'50px', marginBottom:'20px'}}>
          <TextField
          style={{width:'40%'}}
          required
           name="email"
           id="standard-basic" 
           type="email"
           onChange={handlerEmailOnChange}
           label="Put Admin E-Mail" 
           variant="standard" />
           <Button sx={{marginTop:'20px', marginLeft:'16px'}} type='submit' variant='outlined' color="inherit">Make Admin </Button>
          </Box>
          </form>
          {success && <Alert severity="success">
          <AlertTitle> Admin Success</AlertTitle>
          You are a Register Admin — <strong>Congrats</strong>
        </Alert>}
        </Box>
     );
};

export default MakeAdmin;