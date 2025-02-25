import css from './FriendListItem.module.css';
export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.Container}>
      <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
      <p className={css.friendName}> {name}</p>

      <p
        className={`${css.friendStatus} ${isOnline ? css.online : css.offline}`}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
      {/* <p className={css.friendStatus}>
        Friend status: {isOnline ? 'Online' : 'Offline'}{' '}
      </p> */}
    </div>
  );
}
