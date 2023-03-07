import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';



export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => 
       <FriendListItem
        key={friend.id}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
        name={friend.name}
        />
      )}
    </ul>
  );
};





FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
