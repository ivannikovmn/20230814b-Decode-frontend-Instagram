'use client'

// import logo from '../../app/images/logo.svg'
import searchIcon from '../../app/images/search.svg'
import newPostsIcon from '../../app/images/newposts.svg'
import storiesIcon from '../../app/images/stories.svg'
import Image from 'next/image'
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
                        {/* <button className="button button-primary">
                            Войти
                        </button>    
                        <button className="header-auth">
                            Зарегистрироваться
                        </button>     */}

                        {/* Если есть вход в систему*/} 
                        <a href="#" className="header-post">
                                <Image src={newPostsIcon} />
                        </a> 
                        <a href="#" className="header-story">
                                <Image src={storiesIcon} />
                        </a>                         

                    </div>
                </div>
            </div>
        </header>
    )
}