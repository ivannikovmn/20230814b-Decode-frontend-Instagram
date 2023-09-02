export default function Post({post, remove}) {
    return(
        <fieldset className="post">
            <h4>{post.about}</h4>

            <span onClick={() => remove(post)}>Удалить</span>
        </fieldset>            
  )
}