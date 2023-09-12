import MyPost from "./mypost";
export default function MyPosts ({posts}) {

    const showPosts = posts.map(item => 
        (<MyPost 
            // post={item?.post ?? 'Позиция не указана'}   
            post={item.post}               
            // // <для поста в модальном окне (+в mypost index)> 
            // about={item.about}
            // // createdAt={item?.createdAt ?? 'Дата не указана'}
            // createdAt={item.createdAt} 
            // cityId={item.cityId} 
            // userId={item.userId} 
            // // </для поста в модальном окне (+в mypost index)> 
            key={0}
        />)); 

    return (<div className="flex flex-g">
        {showPosts}
    </div>)
}