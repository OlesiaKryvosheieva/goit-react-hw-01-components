import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from "components/user.json";
import data from "components/data.json"
import friends from "components/friends.json"
import transactions from "components/transactions.json"


export const App = () => {
  return (
    <div
      style={{
       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile username={user.username} tag={user.tag} avatar={user.avatar} location={user.location} stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
