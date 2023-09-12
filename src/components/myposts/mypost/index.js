
export default function MyPost ({post}) {
// <для поста в модальном окне (+в Myposts index)>
// export default function MyPost ({post, about, createdAt, cityId, userId }) {    
// </для поста в модальном окне (+в Myposts index)>  
    return (<div>
        <div>        
        <img src={post} />
        {/* <для поста в модальном окне (+в Myposts index)> */}
        {/* <p>{about}</p>
        <p>{createdAt}</p>
        <p>{cityId}</p>
        <p>{userId}</p>       */}
        {/* </для поста в модальном окне (+в Myposts index)>      */}
        </div>
    </div>)
}