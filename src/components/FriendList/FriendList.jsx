import React from 'react';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem />
      </li>
    </ul>
  );
};

export default FriendsList;
