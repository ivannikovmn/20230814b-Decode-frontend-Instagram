'use client'
import { useState } from "react"
import Image from 'next/image'
import Link from 'next/link'

import avatar from '../app/images/avatar.png'

export default function Suggestions(){
    
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
                            _mikhail_ivannikov <br />
                            Алматы
                        </div>
                        <div style={{"width" : "10%"}}>                            
                            <a className="button button-primary">Подписаться</a>
                        </div>                                            
                        
                    </div>        
    </div>)
}