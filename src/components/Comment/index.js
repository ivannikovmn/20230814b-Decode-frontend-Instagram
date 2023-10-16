import { useDispatch, useSelector } from 'react-redux'
import { getPostById } from '@/app/store/slices/postSlice';
import { useParams } from 'next/navigation'

export default function Comment({comment, selectedPost, remove}) {

    // const dispatch = useDispatch();
    // // const {id} = useParams();

    // const id = selectedPost ? selectedPost.id : '';

    // const didMount = () => {
    //     dispatch(getPostById(id))
    //   }

    return(
        <div>            
                terrylucas: 
                {comment}
                {/* {id}  */}
            <span onClick={()=>remove(comment)} style={{cursor:'pointer'}}>(Удалить)</span>
        </div>           
  )
}