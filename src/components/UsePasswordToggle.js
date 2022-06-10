import React, { useState } from 'react'
import Icon from 'react-icons-kit';

const UsePasswordToggle = () => {
    const [visible, setVisibility] = useState(false);
    const Icon = (
        <Icon icon = {visible ? "eyeOff" :" eye"}/>
    )

    const InputType = 'visible' ? "text" : "password"
  return [InputType,Icon];
}

export default UsePasswordToggle
