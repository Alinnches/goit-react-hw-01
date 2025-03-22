import React from "react";
import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendItem}>
      <img className={s.avatar} src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={isOnline ? s.online : s.offline}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
};

export default FriendListItem;
