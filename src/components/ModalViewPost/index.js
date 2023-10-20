import Image from 'next/image'
import likeIcon from '../../app/images/like.png'
import avatar from '../../app/images/avatar.png'
import Link from 'next/link'
import AddComment from '../AddComment'
import { useEffect, useState } from 'react'
import Comment from '../Comment'
import ModalEditPost from '@/components/ModalEditPost';
import { getCommentById } from '@/app/store/slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComment } from '@/app/store/slices/postSlice'

export default function ModalViewPost({ close, selectedPost }) {
    // Проверяем, есть ли выбранный пост, и устанавливаем соответствующее значение переменной about
    const id = selectedPost ? selectedPost.id : '';
    const about = selectedPost ? selectedPost.about : '';
    const postImageSrc = selectedPost && selectedPost.post ? selectedPost.post : null;

    const [comments, setComments] = useState([])
    // const [comment, setComment] = useState("");
    const [commentData, setCommentData] = useState(null);
    // const comment = commentData;
    const comment = useSelector(state => state.post.comment);
    console.log('comment+', comment);
    // const comment = useSelector(state => state.post.comment)    

    const dispatch = useDispatch();

    // console.log(postImageSrc );

    const AddComment_ = (item) => {
        // Добавляем новый комментарий к существующему массиву комментариев
        setComments([...comments, item])
    }

    const removeComment = (comment) => {
        let co = [...comments]
        let index = comments.indexOf(comment)
        co.splice(index, 1);
        setComments(co)
    }

    const [ModalPostEditIsOpen, setModalPostEditIsOpen] = useState(false)

    const closeModalPostEdit = () => {
        setModalPostEditIsOpen(false)
      }

      const closeChildModal = () => {
        close(); 
    }          

    const didMount = () => {
        dispatch(getCommentById(id))
        
        // return () => {
        //   dispatch(setLoadingTrue())
        // }
      }    

    useEffect(didMount, [])

    return (
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner flex">
                <div>
                    {/* <img src="/images/Small-Post1.png" /> */}
                    <img src={postImageSrc} />
                    {/* Аккаунты */}
                </div>
                <div>
                    <div className='flex flex-js-sb p1'>
                        <div style={{"width" : "10%"}}>
                            <Link className="header-button" href="/user-profile">
                                <Image src={avatar} alt="icon" />                               
                            </Link>
                        </div>
                        <div style={{"width" : "80%"}}>
                            {/* {id} */}
                            terrylucas <br />
                            Алматы
                        </div>
                        <div style={{"width" : "10%"}}>                            
                        {ModalPostEditIsOpen && (
                            <ModalEditPost close={closeModalPostEdit} closeParentModal={closeChildModal} selectedPost={selectedPost} />
                        )}
                            
                            <a style={{cursor:'pointer'}} onClick={()=>setModalPostEditIsOpen(true)}>...</a>
                        </div>                                            
                        
                    </div>                    
                    <div className='p1'>
                    {about && (
                        <p>{about}</p>
                    )}                                           
                        {/* Подпись <br /> */}
                        {/* {comments.map(item => (<p key={item.id}>{item.comment}</p>))} */}
                        {/* {comment} */}
                        <Link href="#">
                        <Image src={likeIcon} alt="icon"/>
                        </Link>
                        

                        {comment.map((item, index) => (
                            <div key={index}>
                                <p>
                                    {item.comment}
                                    <span style={{cursor:'pointer'}} onClick={() => dispatch(deleteComment(item.id))}> (Удалить)</span>                                
                                </p>
                                
                            </div>
                        ))}

                        {/* {comments.map(item => (<Comment key={item.id} remove={removeComment} selectedPost={selectedPost}/>))} */}
                        <AddComment AddComment_={AddComment_} selectedPost={selectedPost} />                        
                    </div>
                </div>
            </div>
        </div>
    )
}
