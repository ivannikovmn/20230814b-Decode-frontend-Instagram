'use client'
import { useState } from "react"
// import logo from '../../../app/images/logo.svg';
import smartPhones from '../../../app/images/smartphones.png'
import Image from 'next/image'
export default function UserLogin () {
    const [step, setStep] = useState(1)

    return (
        <section className='smartphones-login-page'>
            <div>
                <Image src={smartPhones} />
            </div>
            <div className="login-page">
                <img src="/images/logo.svg" />
                {/* <Image src={logo} /> */}

                {step === 1 && <div className="card">
                    <h1>Как пользователь</h1>
                    <form>
                        <input className="input" placeholder="Введите email"/>
                        <button className="button button-primary" onClick={()=>setStep(2)}>Войти</button>                
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
                        <input className="input" placeholder="Введите код"/>
                        <p>Повторить можно через 00:40</p>
                        <button className="button button-primary" onClick={()=>setStep(3)}>Продолжить</button>                
                        <button className="button button-primary-bordered" onClick={()=>setStep(1)}>Назад</button>                
                    </form>
                </div>}  

                {step === 3 && <div className="card">
                    <h1>Ваши данные</h1>                
                    <form>
                        <input className="input" placeholder="Имя"/>
                        <input className="input" placeholder="Фамилия"/>
                        <button className="button button-primary">Продолжить</button>                
                        <button className="button button-primary-bordered" onClick={()=>setStep(2)}>Назад</button>                
                    </form>
                </div>}                  
            </div>                    
        </section>
    )
}