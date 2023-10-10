import { useState } from "react"

export default function AddComment({AddComment_}) {
    const [comment, setComment] = useState("")

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
    }

    return(
        <div>
            {/* <input className="input" placeholder="Добавьте комментарий..." type="text" onChange={onChangeComment} value={comment}/> */}
            <textarea className="input" placeholder="Добавьте комментарий..." type="text" onChange={onChangeComment}>{comment}</textarea>
            <button className="link-blue" onClick={save}>Опубликовать</button>             
        </div>           
  )
}