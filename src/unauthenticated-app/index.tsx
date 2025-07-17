import { useState } from "react"
import { LoginScreen } from "./login"
import { RegisterScreen } from "./register"
import React from 'react';

export const UnauthenticatedApp = () => {
  const [isRegister,setIsRegister] = useState(false)
  return <div>
    {
      isRegister ? <RegisterScreen/> : <LoginScreen/>
    }
    <button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister?'登录':'注册'}</button>
  </div>
}