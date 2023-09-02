'use client'

import Header from '@/components/header'
import { useEffect, useState } from 'react';
import MyPosts from '@/components/myposts'
import postsIcon from '../../app/images/posts.svg'
import Image from 'next/image'
import Post from '@/components/Post';

import ModalAddPos from '@/components/ModalAddPos'
export default function PostPage() {
  const [ModalPosIsOpen, setmodalPosIsOpen] = useState(false)

  const closeModalPos = () => {
    setmodalPosIsOpen(false)
  }  

  const [posts, setPosts] = useState([])

  // const posts = [{
  //   post: <img src="/images/Small-Post1.png" />
  // }, 
  // {
  //   post: <img src="/images/Small-Post2.png" />
  // }, 
  // {
  //   post: <img src="/images/Small-Post3.png" />
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
            {/* {posts.map(item => (<p>{item.about}</p>))}*/}
            {posts.map(item => (<Post post={item} remove={removePost}/>))}
            <button className='button button-primary-bordered' onClick={() => setmodalPosIsOpen(true)}>Добавить пост</button>
          </div>

            Публикации 
            <Image src={postsIcon} />
         </div>
         {/* <MyPosts posts={posts}/> */}
      </div>
    </main>
  )
}
