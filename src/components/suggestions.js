'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import avatar from '../app/images/avatar.png'
import { getSuggestions } from "@/app/store/slices/postSlice";
import { useSelector, useDispatch } from "react-redux";
import { createFollower } from '@/app/store/slices/followerSlice'


export default function Suggestions(){

    const suggestionTypes = useSelector((state) => state.post.suggestions);
    const id = useSelector((state) => state.auth.id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getSuggestions());
      }, [dispatch]);

    //   console.log('suggestionTypes[0].followedUserId', suggestionTypes[0].followedUserId*1);

    const handleFollower = () => {
        dispatch(createFollower({
          userid: suggestionTypes[0].followedUserId*1,
          followerUserId: id
        }))
        alert ("Подписка успешно совершена") //temp
      }

    return (
    <div>
        <h1 className='p3'>Рекомендации для вас</h1>
        <div className='flex p1'>
                        <div style={{"width" : "10%"}}>
                            <Link className="header-button" href="/user-profile">
                                <Image src={avatar} alt="icon" />                               
                            </Link>
                        </div>
                        <div style={{"width" : "20%"}}>
                            {/* {id} */}
                            {suggestionTypes && suggestionTypes.length > 0 ? suggestionTypes[0].followedUserId : ""}
                            _mikhail_ivannikov <br />
                            Алматы
                        </div>
                        <div style={{"width" : "10%"}}>                            
                            <a className="button button-primary" onClick={handleFollower}>Подписаться</a>
                        </div>                                            
                        
                    </div>        
    </div>)
}