import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friendItem}>
          <FriendListItem friend={friend} />
        </li>
      ))}
      ;
    </ul>
  );
};

export default FriendList;
