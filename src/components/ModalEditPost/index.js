'use client';
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import avatar from '../../app/images/avatar.png'
import { deletePost } from '@/app/store/slices/postSlice';
import { useEffect, useState } from 'react';
import { editPost } from '@/app/store/slices/postSlice';
import { useRouter } from 'next/navigation';

export default function ModalEditPost({ close, selectedPost, closeParentModal }) {
    const router = useRouter()
    const id = selectedPost ? selectedPost.id : '';
    // const about = selectedPost ? selectedPost.about : '';
    const postImageSrc = selectedPost && selectedPost.post ? selectedPost.post : null;
    const [about, setAbout] = useState("");

    const dispatch = useDispatch()

    const deletePostHandler = () => {
        // Удаление поста
        dispatch(deletePost(id));
        // Закрыть ModalEditPost
        close();
        // Закрыть ModalViewPost, если функция передана
        if (closeParentModal) {
            closeParentModal();
        }
    };

    useEffect(() => {
        if (selectedPost) {
            setAbout(selectedPost.about);
        }
    }, [selectedPost]);

    const handleSave = () => {
        dispatch(editPost(    {      
          id,
          post: postImageSrc,
          about     
        }, router))
      }    
    
    return(
        <div className="modal">
             <div className="modal-backdrop" onClick={close}></div>
             <div className="modal-inner" style={{"max-width" : "550px"}}>
                <div className='flex flex-js-sb flex-ai-c' style={{"border-bottom": "1px solid #DBDBDB"}}>
                    <a className='button button-primary-bordered' onClick={close}>Отмена</a>
                    <h4>Редактирование информации</h4>
                    <a className='button button-primary' onClick={handleSave}>Готово</a>
                </div>
                <div className='flex' style={{"padding-bottom": "10px"}}>
                    <div>
                        {/* <img src="/images/Small-Post1.png" /> */}
                        <img src={postImageSrc} />
                        {/* Аккаунты */}
                    </div>
                    <div>
                        <div className='flex flex-js-sb p1'>
                            <div style={{"width" : "10%"}}>                            
                                    <Image src={avatar} alt="icon" />                               
                            </div>
                            <div style={{"width" : "85%"}}>
                                
                                terrylucas <br />
                                Алматы
                            </div>     
                                            
                        </div>                    
                        <div className='p1'>                        
                        {/* {about && (
                            <p>{about}</p>                            
                        )} */}
                        <textarea className="textarea" placeholder='Добавьте подпись...' onChange={(e) => setAbout(e.target.value)} value={about}></textarea>                        
                        {/* {id} */}
                        </div>                        
                    </div>                                          
                </div>
                <div className='flex'>
                <a className='button button-primary flex-js-c' style={{ "width": "100%" }} onClick={deletePostHandler}>
                        Вообще полностью удалить публикацию
                    </a>                   
                </div>
                
                
             
             </div>
        </div>                
  )
}