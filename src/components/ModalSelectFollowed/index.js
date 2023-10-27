import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFollowed } from "@/app/store/slices/postSlice";
import FollowUser from "./FollowUser"; // Импортируйте компонент FollowUser

export default function ModalSelectFollowed({ close, onChange }) {
  const [search, setSearch] = useState("");
  const followTypes = useSelector((state) => state.post.followed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowed());
  }, [dispatch]);

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner">
        <h2>Ваши подписки</h2>
        <input className="input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        
        {/* Отобразите каждого подписчика с помощью компонента FollowUser */}
        {followTypes.map((follow) => (
          <FollowUser key={follow.followedUserId} FollowUser={follow} />
        ))}
      </div>
    </div>
  );
}
