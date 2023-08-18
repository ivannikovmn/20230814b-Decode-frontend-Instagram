'use client'

import Header from '@/components/header'
import MyPosts from '@/components/myposts'
import postsIcon from '../../app/images/posts.svg'
import Image from 'next/image'
export default function PostPage() {
  // const posts = [1, 2, 3, 4, 5]

  const posts = [{
    post: <img src="/images/Small-Post1.png" />
  }, 
  {
    post: <img src="/images/Small-Post2.png" />
  }, 
  {
    post: <img src="/images/Small-Post3.png" />
  }]
  return (
    <main>
      
      <div className='container'>
         <Header />
         <div className='ptb7'>
            Публикации 
            <Image src={postsIcon} />
         </div>
         <MyPosts posts={posts}/>
      </div>
    </main>
  )
}
