'use client'

// import logo from '../../app/images/logo.svg'
import searchIcon from '../../app/images/search.svg'
import newPostsIcon from '../../app/images/newposts.svg'
import storiesIcon from '../../app/images/stories.svg'
import avatar from '../../app/images/avatar.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <img src="/images/logo.svg" />
                    </div>
                    <div>
                         <button className="header-search">
                                <Image src={searchIcon} />
                            Поиск
                        </button> 
                    </div>                    
                    <div>
                        {/* Если нет входа в систему*/}
                        <button className="button button-primary" href="#">
                            Войти
                        </button>    
                        <Link className="header-auth" href="/login">
                            Зарегистрироваться
                        </Link>    

                        {/* Если есть вход в систему*/} 
                        <Link className="header-button" href="/create-post" >
                                <Image src={newPostsIcon} />
                        </Link>                         
                        <Link className="header-button" href="#" >
                                <Image src={storiesIcon} />
                        </Link>    
                        <Link className="header-button"  href="/profile">
                                <Image src={avatar} />
                        </Link>                                                                                                              
                    </div>
                </div>
            </div>
        </header>
    )
}