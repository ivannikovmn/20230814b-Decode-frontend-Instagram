export default function FollowerUser({FollowerUser}){
    return (
        <div>            
            <div className="flex ">
                <div className="p2">
                    <img src="/images/avatar3.png"/>
                </div>
                <div className="flex-cl ">
                    {FollowerUser.followerUserId}
                    <button className="link-blue">Подписаться</button>
                    <div>Mikhail Ivannikov</div>
                </div>
                <div className="p2">
                    <button  className="button">Удалить</button>
                </div>

            </div>
                    
            
        </div>
    )
}

