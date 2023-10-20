'use client'
import jwt_decode from "jwt-decode"
import { useDispatch } from 'react-redux'
import { authorize, setEmail, setId } from '@/app/store/slices/authSlice'
import { useEffect } from 'react'

export default function Token({}) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token);

    if(token) {
        let decodeToken = jwt_decode(token)          
        if(decodeToken.exp * 1000 > Date.now() ) {
            dispatch(authorize({token}))
            // console.log(decodeToken.email);
            dispatch(setEmail(decodeToken.email)); // Установка email в состоянии Redux
            dispatch(setId(decodeToken.id)); // Установка email в состоянии Redux
        } else {
            localStorage.removeItem("token")
        }
    }
}, [])

    return(
        <div></div>           
  )
}