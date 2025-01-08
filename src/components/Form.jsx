import React from 'react'
import Box from '@mui/material/Box'
import Steps from './Steps'
import { Button, Stack, Typography, TextField, Divider, FormLabel, RadioGroup, FormControlLabel, Radio, FormControl   } from '@mui/material'
import { useFormik } from 'formik'
import { admissionForm } from '../schemas'
const initialValues = {
  fname:'',
  mname:'',
  lname:'',
  fname_tamil:'',
  mname_tamil:'',
  lname_tamil:'',
  dob:'',
  sex:'',
  need_any_special_requirements:'',
  message:''
}

export default function Form() {
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: admissionForm,
    onSubmit : (values)=>{
      console.log(values)
    }
  })
  console.log(errors)

  return (
    <Box sx={{width:'fit-content'}}>
      <Stack sx={{justifyContent:'center', alignItems:'center', mb:1}}>
        <Steps/>
      </Stack>
      <Typography variant='h6' gutterBottom sx={{color: '#393186'}}>Admission form</Typography>
      <Box onSubmit={handleSubmit} component="form" className='form-action' sx={{width:{md:'1013px',sm:'fit-content'}}}>
        <Typography variant='h6' gutterBottom className='form-head-1' sx={{color:'#000000'}}>Full name as in identification/ verification document (like Passport)</Typography>
        <Stack direction={{md:'row',xs:'column'}} spacing={3} sx={{justifyContent: "space-between",mb:4, mt:4}}>
            <Box>
                <FormLabel htmlFor='Name' id='form-label' >Name <span>*</span></FormLabel>
                <TextField type='text' onChange={handleChange} onBlur={handleBlur} value={values.fname} name='fname' id="Name" label="Name" variant="outlined" sx={{width:{md:'298px',xs:'100%'}, mt:'8px'}}/>
                {errors.fname && touched.fname ?<Typography variant='body2' className='error-text'>{errors.fname}</Typography>: null}
            </Box>
            <Box>
                <FormLabel htmlFor='Middle_Name' id='form-label'>Middle name <span>*</span></FormLabel>
                <TextField type='text' onChange={handleChange} onBlur={handleBlur} value={values.mname} name='mname' id="Middle_Name" label="Middle name" variant="outlined" sx={{width:{md:'298px',xs:'100%'}, mt:'8px'}}/>
                {errors.mname && touched.mname ?<Typography variant='body2' className='error-text'>{errors.mname}</Typography>: null}
            </Box>
            <Box>
                <FormLabel htmlFor='Last_Name' id='form-label'>Last name <span>*</span></FormLabel>
                <TextField type='text' onChange={handleChange} onBlur={handleBlur} value={values.lname} name='lname' id="Last_Name" label="Last name" variant="outlined" sx={{width:{md:'298px',xs:'100%'}, mt:'8px'}}/>
                {errors.lname && touched.lname ?<Typography variant='body2' className='error-text'>{errors.lname}</Typography>: null}
            </Box>
        </Stack>
        <Divider variant="middle" />
        <Typography variant='h6' gutterBottom className='form-head-1' sx={{mt:3}}>மாணவர் பெயர் தமிழில் பதிவிடவும் - Students Name in Tamil</Typography>
        <Stack direction={{md:'row',xs:'column'}} spacing={3} sx={{justifyContent: "space-between",mb:4, mt:4}}>
            <Box>
                <FormLabel htmlFor='Name' id='form-label'>முதல் பெயர் <span>*</span></FormLabel>
                <TextField type='text' onChange={handleChange} onBlur={handleBlur} value={values.fname_tamil} name='fname_tamil' id="Name" label="முதல் பெயர்" variant="outlined" sx={{width:{md:'298px',xs:'100%'}, mt:'8px'}}/>
                {errors.fname_tamil && touched.fname_tamil ?<Typography variant='body2' className='error-text'>{errors.fname_tamil}</Typography>: null}
            </Box>
            <Box>
                <FormLabel htmlFor='Middle_Name' id='form-label'>நடுத்தர பெயர் <span>*</span></FormLabel>
                <TextField type='text' onChange={handleChange} onBlur={handleBlur} value={values.mname_tamil} name='mname_tamil' id="Middle_Name" label="நடுத்தர பெயர்" variant="outlined" sx={{width:{md:'298px',xs:'100%'}, mt:'8px'}}/>
                {errors.mname_tamil && touched.mname_tamil ?<Typography variant='body2' className='error-text'>{errors.mname_tamil}</Typography>: null}
            </Box>
            <Box>
                <FormLabel htmlFor='Last_Name' id='form-label'> கடைசி பெயர் <span>*</span></FormLabel>
                <TextField type='text' onChange={handleChange} onBlur={handleBlur} value={values.lname_tamil} name='lname_tamil' id="Last_Name" label=" கடைசி பெயர்" variant="outlined" sx={{width:{md:'298px',xs:'100%'}, mt:'8px'}}/>
                {errors.lname_tamil && touched.lname_tamil ?<Typography variant='body2' className='error-text'>{errors.lname_tamil}</Typography>: null}
            </Box>
        </Stack>
        <Divider variant="middle"/>
        <Stack direction='column' sx={{mt:4}}>
            <FormLabel htmlFor='dob' id='form-label'> பிறந்த தேதி - Date of Birth <span>*</span></FormLabel>
            <TextField onChange={handleChange} onBlur={handleBlur} value={values.dob} name='dob' id="dob" type='date' variant="outlined" sx={{ mt:'8px'}}/>
            {errors.dob && touched.dob ?<Typography variant='body2' className='error-text'>{errors.dob}</Typography>: null}
        </Stack>
        <Box sx={{mt:4}}>
          <FormLabel id="form-label">பாலினம் (Sex) <span>*</span></FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"  name="sex" onChange={handleChange} onBlur={handleBlur} value={values.sex}>
            <FormControlLabel value="boy" control={<Radio />} label="ஆண் (Boy)" sx={{color:'#01103280'}}/>
            <FormControlLabel value="girl" control={<Radio />} label="பெண் (Girl)" sx={{color:'#01103280'}}/>
          </RadioGroup>
          {errors.sex && touched.sex ?<Typography variant='body2' className='error-text'>{errors.sex}</Typography>: null}
        </Box>
        <Box sx={{mt:4}}>
          <FormLabel id="form-label">Does your child need any special requirements that the school has to be aware of <span>*</span></FormLabel>
          <RadioGroup aria-labelledby="demo-radio-buttons-group-label"  name="need_any_special_requirements" onChange={handleChange} onBlur={handleBlur} value={values.need_any_special_requirements}>
            <FormControlLabel value="yes" control={<Radio />} label="Yes" sx={{color:'#01103280'}}/>
            <FormControlLabel value="no" control={<Radio />} label="No" sx={{color:'#01103280'}}/>
            <FormControlLabel value="Prefer not to say" control={<Radio />} label="Prefer not to say" sx={{color:'#01103280'}}/>
          </RadioGroup>
          {errors.need_any_special_requirements && touched.need_any_special_requirements ?<Typography variant='body2' className='error-text'>{errors.need_any_special_requirements}</Typography>: null}
        </Box>
        <Stack direction='column' sx={{mt:4}}>
            <FormLabel htmlFor='message' id='form-label'> If you have answered "Yes" to the previous question, please let us know the requirements below. <span>*</span></FormLabel>
            <TextField name='message' id="message" type='text' variant="outlined" sx={{ mt:'8px'}} label="Write your message here.." multiline rows={6} onChange={handleChange} onBlur={handleBlur} value={values.message} />
            {errors.message && touched.message ?<Typography variant='body2' className='error-text'>{errors.message}</Typography>: null}
        </Stack>
        <Stack direction='row' spacing={2} sx={{mt:8, justifyContent:'center'}}>
          {/* <Button type='cancel'>Back</Button> */}
          <Button variant="contained" size='large' type='submit' sx={{background:'#393186', width:{md:'148px'}, height:{md:'53px'}}}>Next</Button>
        </Stack>
      </Box>
    </Box>
  )
}
