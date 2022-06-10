import React from 'react'
import './Form.css'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from 'reactjs-popup';
import FromSuccess from './FromSuccess'





const FromSiginUp = ({ submitForm }) => {



  //  const { handleChange, values, handleSubmit1, errors1 } = useForm(submitForm, validate);



  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const {
    register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
    notify3();

  };

  const notify = () => {
    toast("Welcome to Signin page");
  }
  const notify1 = () => {
    toast("you are in the sign in page");
  }
  const notify2 = () => {
    toast("The new password send to your email");
  }
  const notify3 = () => {
    toast.success("You are Successfully sign in the page");
  }

  return (
    <div className='form-content-right'>
      <div className='flex-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='positionn'>

            <div className='logoo' style={{ color: 'blue' }} >
              <button onClick={notify} className='back-arrow' type='button' >
                <ArrowLeftOutlined />
              </button>
              <ToastContainer />
            </div>
            <div className='bc' ><p>Sign In</p></div>

            <div className='image' ><img src='image/logo.png' width="25" height="25" ></img></div>

          </div>

          {/* <div className='siginin'> */}
          <div className='verify' ><label>Let's verify that it's you</label></div>
          {/* </div> */}


          <div className='form-inputs'>
            <div><lable className='form-lable'>Phone Number </lable></div>


            <div className='form-input'>
              <div className='symbol'><label>+91</label></div>

              <div className='form-input2' >

                <input type='text' name='phonenumber' placeholder='00000 00000' className='input'
                  // value={values.phonenumber} onChange={handleChange} 
                  // onSubmit={handleSubmit(onSubmit)}
                  {...register("phonenumber", {
                    required: 'Phone number required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Only numbers are allowed',
                    },
                    minLength: {
                      value: 10,
                      message: "phone number should be 10 digits ",
                    },
                    maxLength: {
                      value: 10,
                      message: "phone number should be 10 digits ",
                    }
                  })}
                />

                {/* {errors.phonenumber && <p>{errors.phonenumber}</p>} */}
              </div>

            </div>
            {errors.phonenumber && (<small className='text-danger'>
              {errors.phonenumber.message}
            </small>)}

          </div>


          <div className='form-inputs-pass'>
            <div><lable className='form-lable'>Temporary Password</lable></div>

            <div className='form-input'>
              <div className='form-input3'>

                <input id='tempassword' type={passwordType} name='password' className='inputpass' placeholder='****'
                  // value={passwordInput}
                  // onChange={handlePasswordChange} 
                  {...register("password", {
                    required: 'password required',
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Your password must contains one number one special symbol and one capital letter',
                    },
                    minLength: {
                      value: 8,
                      message: "Minimum Required length is 8",
                    },
                    maxLength: {
                      value: 20,
                      message: "Maximum allowed length is 20 ",
                    }
                  })}
                /></div>


              {/* {errors.tempassword && <p>{errors.tempassword}</p>} */}
              <div className='eye' >

                <button className='eye-click' onClick={togglePassword} type='button'>
                  {passwordType === "password" ? <span> <Icon icon={eyeOff} /></span> : <span> <Icon icon={eye} /></span>}
                </button>

              </div></div>
            {errors.password && (<small className='text-danger'>
              {errors.password.message}
            </small>)}

          </div>

          <br></br>
          <div className='space'>
            <div className='form-group-form-inline'>
              <div><input type='checkbox' id='cb1' onClick={notify1}
              /><label for='cb1'></label> </div>
              <ToastContainer />


              <div className='stay'><label>Stay Signed in</label></div>
            </div>


            <p className='form-input-login'>
              Forgot your password? Click to <a href='#' onClick={notify2} className='linkk'>Resend
              </a></p>

            <ToastContainer />

          </div>
          <div>
            <button className='form-input-btn'
              type='submit'  >
              <label className='signin-btn'>SIGN IN</label>

              {/* <Popup trigger={<button> SIGN IN</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup> */}

            </button>





          </div>


          <div className='last'>
            <p>Copyright © GubairOne.
            </p>
          </div>


        </form>
      </div>

    </div>

  );
};

function Home() {
  return (< FromSuccess />)
    ;
}
export default FromSiginUp

