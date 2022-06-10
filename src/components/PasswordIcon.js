// import { useState } from "react/cjs/react.development";
import { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff'
import { eye } from 'react-icons-kit/feather/eye'

function PasswordIcon(){

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange =(evnt)=>{
        setPasswordInput(evnt.target.value);
    }
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(

        <div >
            
                    <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password"  />
                   
                     <button  onClick={togglePassword}>
                     { passwordType==="password"? <span> <Icon icon={eyeOff} /></span> :<span> <Icon icon={eye} /></span> }
                     </button>
                    
            
      </div>
      
    )

}
export default PasswordIcon;