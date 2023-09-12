'use client'
import { useSelector, useDispatch } from 'react-redux'
// import logo from '../../app/images/logo.svg'
import { useEffect, useState } from 'react';
import searchIcon from '../../app/images/search.svg'
import avatar from '../../app/images/avatar.png'
import Image from 'next/image'
import Link from 'next/link'
import { logOut } from '@/app/store/slices/authSlice'

// import ModalAddPos from '@/components/ModalAddPos'
export default function Header () {
    const dispatch = useDispatch()
    // const [ModalPosIsOpen, setmodalPosIsOpen] = useState(false)

    // const closeModalPos = () => {
    //     setmodalPosIsOpen(false)
    //   }  
    
    const isAuth = useSelector((state) => state.auth.isAuth)
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <img src="/images/logo.svg" />
                    </div>
                    <div>
                         <button className="header-search">
                                <Image src={searchIcon}  alt="icon"/>
                            Поиск
                        </button> 
                    </div>                    
                    <div>
                        {/* Если нет входа в систему*/}
                        {!isAuth && <Link className="button button-primary" href="/login">
                            Войти
                        </Link>}  
                        {!isAuth && <button className="header-auth" href="#">
                            Зарегистрироваться
                        </button>}                         
                        {isAuth && <a className="button button-primary" onClick={() => dispatch(logOut())}>
                            Выйти
                        </a>}                           
  

                        {/* Если есть вход в систему*/} 
                        {/* <Link className="header-button" href="/create-post" >
                                <Image src={newPostsIcon} />
                        </Link>              */}
                        {/* {ModalPosIsOpen && <ModalAddPos close={closeModalPos} addPost={addPost}/>}  */}
                        {/* <button className='button button-primary-bordered' onClick={() => setmodalPosIsOpen(true)}>Добавить пост</button>*/}                          
                        <Link className="header-button"  href="/posts">
                                <Image src={avatar}  alt="icon"/>
                        </Link>                                                                                                              
                    </div>
                </div>
            </div>
        </header>
    )
}