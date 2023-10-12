export default function Comment({comment, remove}) {
    return(
        <div>            
                terrylucas: 
                {comment}
            <span onClick={()=>remove(comment)} style={{cursor:'pointer'}}>(Удалить)</span>
        </div>           
  )
}