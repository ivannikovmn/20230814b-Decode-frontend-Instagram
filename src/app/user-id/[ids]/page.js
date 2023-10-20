'use client'

import Token from '@/components/token'
import Header from '@/components/header'
import { useEffect, useState } from 'react';
import MyPosts from '@/components/myposts'
import postsIcon from '@/app/images/posts.svg'
import newPostsIcon from '@/app/images/newposts.svg'
import storiesIcon from '@/app/images/stories.svg'
import addAvatar from '../../../../public/images/Profile-Pic.png'
import Image from 'next/image'
// Post_ это то чно отображается post_
import Post_ from '@/components/Post';
import Link from 'next/link'
import ModalSelectFollowers from '@/components/ModalSelectFollowers'
import ModalViewPost from '@/components/ModalViewPost';
import ModalViewStory from '@/components/ModalViewStory';

import { useDispatch, useSelector } from 'react-redux'
// import { getMyPosts } from '@/app/store/slices/postSlice';
import { getFollowers, getPosts, getMyComments } from '@/app/store/slices/postSlice';
import { getMyStories } from '@/app/store/slices/storySlice'
// import { getFollowers, getMyPosts } from '@/app/store/slices/userProfileSlice';

import ModalAddPos from '@/components/ModalAddPos'
import ModalAddStory from '@/components/ModalAddStory'
import { useParams } from 'next/navigation';

export default function PostPage() {
  const [followerUser, setFollowerUser] = useState()
  const [isFolModalOpen, setFolModalOpen] = useState(false)

  const dispatch = useDispatch();
  const posts_ = useSelector((state) => state.post.posts)
  const stories_ = useSelector((state) => state.story.stories);
  // console.log("here", posts_);
  const didMount = () => {
    dispatch(getPosts())
    dispatch(getMyStories())         
  }
  useEffect(didMount, [])

  // useEffect(() => {
  //   console.log('stories in Redux state: ', stories_[0].id);
  // }, [stories_]);

  const closeFolModal = () => {
    setFolModalOpen(false)        
  }

  const closeModalStoryView = () => {
    setModalStoryViewIsOpen(false)
  }

  const closeModalPostView = () => {
    setModalPostViewIsOpen(false)
  }

  useEffect(() => {
    dispatch(getFollowers())
    console.log('dispatch(getFollowers())', dispatch(getFollowers()));
}, [])


  const [ModalPosIsOpen, setmodalPosIsOpen] = useState(false)
  const [ModalStoryIsOpen, setmodalStoryIsOpen] = useState(false)

  const [ModalStoryViewIsOpen, setModalStoryViewIsOpen] = useState(false)
  const [ModalPostViewIsOpen, setModalPostViewIsOpen] = useState(false)

  const [selectedPostInfo, setSelectedPostInfo] = useState(null);

  const closeModalPos = () => {
    setmodalPosIsOpen(false)
  }  

  const closeModalStory = () => {
    setmodalStoryIsOpen(false)
  }  

  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])


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

  const addStory = (item) => {
    setStories([...stories, item])
    closeModalStory();
  }

  const removePost =(post) => {
    let p = [...posts]
    let index = posts.indexOf(post)
    p.splice(index, 1);
    setPosts(p)
  }

  function handleSelectPost(postInfo) {
    // Ваш код обработки выбранного поста
    setSelectedPostInfo(postInfo);
    setModalPostViewIsOpen(true);
    // console.log("SelectedPost inside handleSelectPost+:", postInfo);
  }

//   const storiesData = [
//     {
//         "id": 44,
//         "post": "",
//         "story": "/images/Small-Post4.png",
//         "about": "«Врач — философ: ведь нет большой разницы между мудростью и медициной» Гиппократ+",
//         "participants": "_kz_al,_mi.design",
//         "createdAt": "2023-10-17T13:03:26.128Z",
//         "updatedAt": "2023-10-17T13:03:26.128Z",
//         "cityId": 31,
//         "userId": 1
//     },
//     {
//         "id": 45,
//         "post": "",
//         "story": "/images/Small-Post4.png",
//         "about": "«Врач — философ: ведь нет большой разницы между мудростью и медициной» Гиппократ+",
//         "participants": "_kz_al,_mi.design",
//         "createdAt": "2023-10-17T13:56:26.622Z",
//         "updatedAt": "2023-10-17T13:56:26.622Z",
//         "cityId": 31,
//         "userId": 1
//     }
// ];

// const firstStory = storiesData[0];
const email = useSelector((state) => state.auth.email); // Используйте правильный путь к email в вашем состоянии Redux
const id = useSelector((state) => state.auth.id);

const {ids} = useParams()
console.log('ids', ids);
const filteredPosts = posts_.filter(post => post.userId === parseInt(ids)); // Преобразовать `ids` в число, если оно не было

  return (
    <main>
      <div className='container'>
         <Token />
         <Header />


         <div className='ptb7'>

         {/* {ModalPosIsOpen && <ModalAddPos close={closeModalPos} addPost={addPost}/>}
         {ModalStoryIsOpen && <ModalAddStory close={closeModalStory} addStory={addStory}/>} */}
          <div className='pos'>                                                        
            {/* <a className="header-button" onClick={() => setmodalStoryIsOpen(true)}>
                    <Image src={storiesIcon} alt="icon"/>
            </a>             
            <a className="header-button" onClick={() => setmodalPosIsOpen(true)} >
                    <Image src={newPostsIcon} alt="icon" />
            </a>               */}
            <div className='flex'>
              <div>                               
              {stories_[0] && ModalStoryViewIsOpen && <ModalViewStory story={stories_[0].story} id={stories_[0].id} close={closeModalStoryView}/>}
              
                <a style={{cursor:'pointer'}} onClick={()=>setModalStoryViewIsOpen(true)}>
                  <Image src={addAvatar} alt="icon" />
                </a> 
              </div>
              <div>
                  <h3>
                    {/* terrylucas  */}
                    <Link style={{textDecoration:'none', color: '#000' }} href={`/user-id/${id}`}>{email}</Link>
          
                  </h3>   
                  <div style={{paddingBottom:'20px'}}>
                  <button className="button button-primary-bordered">Подписаться</button>  
                  </div>

                  <div className='flex-js-sb'>
                    <a>1258 публикаций </a> 
                    <a className="link" onClick={() => setFolModalOpen(true)}>4M подписчиков </a>                  
                    {isFolModalOpen && <ModalSelectFollowers close={closeFolModal} onChange={fol => setFollowerUser(fol)}/>}
                    <a>1250 подписок</a>
                  </div>
                  
              </div>
            </div>

            <br/><br/>   
            <h5 style={{borderTop: `1px solid #DBDBDB`}}>                      
                <Image style={{padding: `10px 5px 0 0 `}} src={postsIcon} alt="icon" />
                ПУБЛИКАЦИИ
                {posts.map((item, index) => (<Post_ key={index} post={item} remove={removePost}/>))} 
            </h5>        
          </div>
         </div>
         {ModalPostViewIsOpen && <ModalViewPost close={closeModalPostView} selectedPost={selectedPostInfo}/>}
        <a style={{cursor:'pointer'}} onClick={()=>setModalPostViewIsOpen(true)}>
          {/* <MyPosts posts={posts_} postInfoCallback={handleSelectPost} /> */}
          <MyPosts posts={filteredPosts} postInfoCallback={handleSelectPost} />
        </a>           
      </div>
    </main>
  )
}
