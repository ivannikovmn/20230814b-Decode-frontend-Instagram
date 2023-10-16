import { useState } from "react"
import { createComment } from '@/app/store/slices/postSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";

export default function AddComment({AddComment_, selectedPost}) {
    const router = useRouter()
    const dispatch = useDispatch()

    const [comment, setComment] = useState("")

    const id = selectedPost ? selectedPost.id : '';

    const onChangeComment = (e) => {
        // console.log(e.target.value);
        setComment(e.target.value);
    }

    const save = () => {
        const comment_ = {
            comment
        }
        console.log(comment_);
        AddComment_(comment_)

        dispatch(createComment(    {
            resumeId: id,
            comment     
          }, router))        
    }

    return(
        <div>
            {/* <input className="input" placeholder="Добавьте комментарий..." type="text" onChange={onChangeComment} value={comment}/> */}
            <textarea className="input" placeholder="Добавьте комментарий..." type="text" onChange={onChangeComment}>{comment}</textarea>
            {/* <di> {id} </di> */}
            <button className="link-blue" onClick={save}>Опубликовать</button>             
        </div>           
  )
}