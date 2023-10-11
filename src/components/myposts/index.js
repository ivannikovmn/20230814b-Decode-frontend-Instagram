import MyPost from "./mypost";
import { useState } from 'react';
export default function MyPosts ({posts, postInfoCallback }) {

    const [selectedPost, setSelectedPost] = useState(null);
    

    // Функция для установки выбранного поста
    const handleSelectPost = (postInfo) => {
        setSelectedPost(postInfo);
        postInfoCallback(postInfo);
        // console.log("SelectedPost inside handleSelectPost:", postInfo);
    };

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
            onSelectPost={handleSelectPost}
            // setSelectedPost={setSelectedPost}
            // key={0}
            key={item.id}
        />)); 

    return (<div className="flex flex-g">
        {showPosts}
    </div>)
}