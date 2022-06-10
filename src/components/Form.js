import React, { useState } from 'react'
import FromSiginUp from './FromSiginUp'
import FromSuccesss from './FromSuccess'
import './Form.css'
import Responsiive from './Responsiive'



const Form = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)


  function submitForm() {
    setIsSubmitting(true);
  }
  return (
    <>
      <div className='form-container'>


        <div className='container1'>
          {/*             
              <img src = 'image/home.png' alt='spaceship' className='form-img'></img> */}
        </div>
        <div className='container2'>
          {!isSubmitting ? <FromSiginUp submitForm={submitForm} /> : <FromSuccesss />}
        </div>
     


      </div>
    </>

  );
};

export default Form
