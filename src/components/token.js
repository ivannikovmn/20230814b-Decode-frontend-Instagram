'use client'
import jwt_decode from "jwt-decode"
import { useDispatch } from 'react-redux'
import { authorize } from '@/app/store/slices/authSlice'
import { useEffect } from 'react'

export default function Token({}) {
  const dispatch = useDispatch()
  
  useEffect(() => {
    const token = localStorage.getItem("token")

    if(token) {
        let decodeToken = jwt_decode(token)          
        if(decodeToken.exp * 1000 > Date.now() ) {
            dispatch(authorize({token}))
        } else {
            localStorage.removeItem("token")
        }
    }
}, [])

    return(
        <div></div>           
  )
}