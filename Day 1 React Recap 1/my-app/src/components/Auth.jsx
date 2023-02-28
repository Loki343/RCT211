import React, { useState } from 'react'

const Auth = ({children}) => {
    const [auth] = useState(false)
  
    if(auth){
        return children
    }else{
        return <h1>Please Login First</h1>
    }
  
}

export default Auth
