import React,{createContext, useState} from 'react'

const signupContext =  createContext();

export const UserProvider = ({children})=>{
    const[user,setUser]=useState('');

    return(
        <signupContext.Provider value={{user,setUser}}>
            {children}
        </signupContext.Provider>
    )
}


export default signupContext;
