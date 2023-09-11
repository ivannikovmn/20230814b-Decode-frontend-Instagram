'use client'
// import Header from '@/components/header'
import {useEffect, useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { authorize, sendVerificationEmail, verifyCode } from "@/app/store/slices/authSlice"
// import logo from '../../../app/images/logo.svg';
import smartPhones from '../../../app/images/smartphones.png'
import Image from 'next/image'
export default function UserLogin () {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState("")
    const [code, setCode] = useState("")
    const [time, setTime] = useState(119)
    const isAuth = useSelector((state) => state.auth.isAuth)
    const dispatch = useDispatch()
    const router = useRouter()    

    const sendVerifyEmail = () => {
        dispatch(sendVerificationEmail(email))
        setStep(2)
    }   

    const verifyCodeFunc = () => {
        dispatch(verifyCode(email, code))

    }    
    
    useEffect(() => {
        let interval;
        if(step === 2) {
            interval = setInterval(() => {
                if(time !== 0) setTime(time => time - 1)
            }, 1000)
        } else if(interval) {
            clearInterval(interval)
        }
    }, [step])    

    useEffect(() => {
        if(isAuth)  router.push("/posts")
    }, [isAuth])    

    const min = parseInt(time / 60)
    const sec = time % 60;    

    return (
        <section className='smartphones-login-page'>
             
            {isAuth ? "True" : "False"}
            <div>
            {/* <Header/> */}
                <Image src={smartPhones} alt="icon"/>
            </div>
            <div className="login-page">
                <img src="/images/logo.svg" />
                {/* <Image src={logo} /> */}

                {step === 1 && <div className="card">
                    <h1>Как пользователь</h1>
                    <form>
                        <input className="input" placeholder="Введите email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        {/* <button className="button button-primary" onClick={()=>setStep(2)}>Продолжить</button>                 */}
                        <button className="button button-primary" onClick={sendVerifyEmail}>Продолжить</button>                 
                    </form>
                </div>}

                {step === 1 && <div className="card">
                    <h1>Как менеджер</h1>
                    <form>
                    <p>Размещение постов и доступ к базе постов пользователей</p>
                        <button className="button button-primary-bordered">Я ищу клиентов</button>                
                    </form>
                </div>}

                {step === 2 && <div className="card">
                    <h1>Отправили код на ...</h1>
                    <p>Напишите его, чтобы потвердить, что это вы, а не кто-то другой</p>
                    <form>
                        <input className="input" placeholder="Введите код" value={code} onChange={(e) => setCode(e.target.value)}/>
                        <p>Повторить можно через {min}:{sec}</p>
                        <button className="button button-primary" onClick={verifyCodeFunc} type="button">Продолжить</button>                
                        <button className="button button-primary-bordered" onClick={()=>setStep(1)}>Назад</button>                
                    </form>
                </div>}  

                {/* {step === 3 && <div className="card">
                    <h1>Ваши данные</h1>                
                    <form>
                        <input className="input" placeholder="Имя"/>
                        <input className="input" placeholder="Фамилия"/>
                        <button className="button button-primary" type="button" onClick={() => dispatch(authorize())}>Продолжить</button>                
                        <button className="button button-primary-bordered" onClick={()=>setStep(2)}>Назад</button>                
                    </form>
                </div>}                   */}
            </div>                    
        </section>
    )
}