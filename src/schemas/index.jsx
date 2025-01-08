import * as Yup from 'yup'

export const admissionForm = Yup.object({
    fname: Yup.string().min(2).max(25).required('Please enter your name'),
    mname: Yup.string().min(2).max(25).required('Please enter your middle name'),
    lname: Yup.string().min(2).max(25).required('Please enter your last name'),
    fname_tamil: Yup.string().min(2).max(25).required('Please enter your name in tamil'),
    mname_tamil: Yup.string().min(2).max(25).required('Please enter your middle name in tamil'),
    lname_tamil: Yup.string().min(2).max(25).required('Please enter your last name in tamil'),
    dob: Yup.date().required('Please enter your date of birth') ,
    sex: Yup.string().required('Please select your gender'),
    need_any_special_requirements: Yup.string().required('Please select any option'),
    message: Yup.string().min(2).max(100).required('Please enter your message')
})