
// export default function MyPost ({post, about, onSelectPost, setSelectedPost}) {
  export default function MyPost ({post, about, onSelectPost}) {  
// <для поста в модальном окне (+в Myposts index)>
// export default function MyPost ({post, about, createdAt, cityId, userId }) {    
// </для поста в модальном окне (+в Myposts index)>  

const handlePostClick = () => {
  // Вызываем функцию onSelectPost и передаем информацию о выбранном посте
  onSelectPost({ post, about });
  // setSelectedPost({ post, about });

  // console.log("Selected post:", post);
  // console.log("Selected about:", about);
};


    return (
    <div onClick={handlePostClick}>       
            <img src={post} />
            {/* <для поста в модальном окне (+в Myposts index)> */}
            <p>{about}</p>
            {/*<p>{createdAt}</p>
            <p>{cityId}</p>
            <p>{userId}</p>       */}
            {/* </для поста в модальном окне (+в Myposts index)>      */}
    </div>)
}