import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFollowers } from "@/app/store/slices/postSlice";
import FollowerUser from "./FollowerUser"; // Импортируйте компонент FollowerUser

export default function ModalSelectFollowers({ close, onChange }) {
  const [search, setSearch] = useState("");
  const followerTypes = useSelector((state) => state.post.followers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowers());
  }, [dispatch]);

  return (
    <div className="modal">
      <div className="modal-backdrop" onClick={close}></div>
      <div className="modal-inner">
        <h2>Подписчики</h2>
        <input className="input" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        
        {/* Отобразите каждого подписчика с помощью компонента FollowerUser */}
        {followerTypes.map((follower) => (
          <FollowerUser key={follower.followerUserId} FollowerUser={follower} />
        ))}
      </div>
    </div>
  );
}
