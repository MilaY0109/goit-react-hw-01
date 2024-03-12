// import css from './FriendListItem.module.css';

// const FriendListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <div>
//       <img src={avatar} alt="Avatar" width="148" />
//       <p>{name}</p>
//       {isOnline ? (
//         <p className={css.online}>Online</p>
//       ) : (
//         <p className={css.offline}>Offline</p>
//       )}
//     </div>
//   );
// };

// export default FriendListItem;

import css from './FriendListItem.module.css';



const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.friendAvatar} src={avatar} alt="Avatar" width="148" />
      <p className={css.friendName}>{name}</p>
      {/* {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )} */}
        <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
export default FriendListItem;