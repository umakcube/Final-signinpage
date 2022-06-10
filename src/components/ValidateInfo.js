export default function ValidateInfo(values){
    let errors = {}

    
    if(!values.phonenumber) {
        errors.phonenumber = 'PhoneNumber required'
    }else if( /^[0-9\b]+$/.test(values)){
        errors.phonenumber = 'phone number must be a number'
    }else if(values.phonenumber.length > 11){
        errors.phonenumber = 'PhoneNumber must be 10 digit'
    }



    if (!values.tempassword) {
        errors.tempassword ='password required'
    }else if(values.tempassword.length < 8){
        errors.tempassword = 'password must be 8 charactors or more'
    }

    return errors;
}


