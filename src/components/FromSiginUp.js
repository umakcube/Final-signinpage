import React from 'react'
import { useState } from 'react'
import './Form.css'
import useForm from './UseForm'
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'

import validate from './ValidateInfo'
//  import { useState } from 'react/cjs/react.development'
import { ArrowLeftOutlined } from '@ant-design/icons'


const FromSiginUp = ({ submitForm }) => {
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

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  return (
    <div className=' '>
      <form className='form' onSubmit={handleSubmit}>
        <div className='header'>

          <p> <ArrowLeftOutlined /></p>

          <p><img src='image/logooo.png' className='form-right'  ></img></p>
        </div>
        <div className='siginin'>
          <h3>Sign In</h3>
        </div>
        <div className='content'>
        <p>Let's verify that it's you</p>
        </div>
        <div className='form-inputs'>
          <lable htmlFor='Phone Number'
            className='form-lable'>Phone Number
          </lable>

          <input id='phonenumber' type='text' name='phonenumber'
            className='form-input' placeholder='000000 000000'
            value={values.phonenumber}
            onChange={handleChange} />
          {errors.phonenumber && <p>{errors.phonenumber}</p>}
        </div>


        <div className='form-inputs'>
          <lable htmlFor='tempassword'
            className='form-lable'>Temporary Password
          </lable>

          <input type={passwordType} name='password'
            onChange={handlePasswordChange}

            className='form-input'
            value={passwordInput}>
          </input>
          <button className='btn btn-outline-primary'
            onClick={togglePassword}>
            {passwordType === "password" ? <span> <Icon icon={eyeOff} /></span>
              : <span> <Icon icon={eye} /></span>
            }
          </button>

          {/*                   
                    {errors.tempassword && <p>{errors.tempassword}</p>} */}

        </div>


        <div className='form-group form-inline'>
          <input type="checkbox"
            defaultChecked={true} /> <label>Stay Signed In</label>
        </div>



        <span className='form-input-login'>
          Forgot your password? Click to <a href='#'>Resend</a>

        </span>

        <button className='form-input-btn'
          type='submit'>SIGN IN

        </button>


        <footer>Copyright © GubairOne </footer>



      </form>

    </div>

  );
};

export default FromSiginUp

