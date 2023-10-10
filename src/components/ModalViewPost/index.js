import Image from 'next/image'
import Link from 'next/link'
import avatar from '../../app/images/avatar.png'
import AddComment from '../AddComment'
import { useState } from 'react'
import Comment from '../Comment'

export default function ModalViewPost({ close }) {
    const [comments, setComments] = useState([])

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

    return (
        <div className="modal">
            <div className="modal-backdrop" onClick={close}></div>
            <div className="modal-inner flex">
                <div>
                    <img src="/images/Small-Post1.png" />
                    {/* Аккаунты */}
                </div>
                <div>
                    <div className='flex'>
                        <div>
                            <Link className="header-button" href="/user-profile">
                                <Image src={avatar} alt="icon" />
                            </Link>
                        </div>
                        <div>
                            terrylucas <br />
                            Алматы
                        </div>
                    </div>
                    <div className='p1'>
                        Подпись <br />
                        {/* {comments.map(item => (<p key={item.id}>{item.comment}</p>))} */}
                        {comments.map(item => (<Comment comment={item} remove={removeComment}/>))}
                        <AddComment AddComment_={AddComment_} />
                    </div>
                </div>
            </div>
        </div>
    )
}
