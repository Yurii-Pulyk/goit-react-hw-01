export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>Friend name: {name}</p>
      <p>Friend status: {isOnline ? 'Online' : 'Offline'} </p>
    </div>
  );
}
