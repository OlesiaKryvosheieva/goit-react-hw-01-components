import css from './FriendList.module.css';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status : css.isOutline}>{isOnline}</span>
      <img
        className={css.avatar}
        src={avatar}
        alt={name}
        width="78"
        height="78"
      />
      <p className="name">{name}</p>
    </li>
  );
};
