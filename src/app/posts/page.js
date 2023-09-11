'use client'

import Header from '@/components/header'
import { useEffect, useState } from 'react';
import MyPosts from '@/components/myposts'
import postsIcon from '../../app/images/posts.svg'
import newPostsIcon from '../../app/images/newposts.svg'
import storiesIcon from '../../app/images/stories.svg'
import Image from 'next/image'
// Post_ это то чно отображается post_
import Post_ from '@/components/Post';
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { getMyPosts } from '@/app/store/slices/postSlice';

import ModalAddPos from '@/components/ModalAddPos'
export default function PostPage() {

  const dispatch = useDispatch();
  const posts_ = useSelector((state) => state.post.posts_)
  console.log("here", posts_);
  const didMount = () => {
    dispatch(getMyPosts())
  }
  useEffect(didMount, [])

  const [ModalPosIsOpen, setmodalPosIsOpen] = useState(false)

  const closeModalPos = () => {
    setmodalPosIsOpen(false)
  }  

  const [posts, setPosts] = useState([])

  // const posts_ = [{
  //   post: <img src="/images/Small-Post1.png" />
  // }, 
  // {
  //   post: <img src="/images/Small-Post2.png" />
  // }, 
  // {
  //   post: <img src="/images/Small-Post3.png" />
  // },
  // {
  //   post: <img src="/images/Small-Post4.jpg" />
  // }]

  const addPost = (item) => {
    setPosts([...posts, item])
    closeModalPos();
  }

  const removePost =(post) => {
    let p = [...posts]
    let index = posts.indexOf(post)
    p.splice(index, 1);
    setPosts(p)
  }
  return (
    <main>
      <div className='container'>
         <Header />


         <div className='ptb7'>

         {ModalPosIsOpen && <ModalAddPos close={closeModalPos} addPost={addPost}/>}
          <div className='pos'>                                  
            {/* <fix cтили в файле header.css> */}
            <a className="header-button">
                    <Image src={storiesIcon} alt="icon"/>
            </a>             
            <a className="header-button" onClick={() => setmodalPosIsOpen(true)} >
                    <Image src={newPostsIcon} alt="icon" />
            </a>              
            {/* </fix cтили в файле header.css> */} 
            <br/><br/>   
            Публикации 
            <Image src={postsIcon} alt="icon" /> 
            {posts.map(item => (<Post_ post={item} remove={removePost}/>))}         
          </div>
         </div>
         <MyPosts posts={posts_}/>
      </div>
    </main>
  )
}
