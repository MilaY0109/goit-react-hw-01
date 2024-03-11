import './App.css';
import userData from './components/Profile/userData.json';
import Profile from './components/Profile/Profile.jsx';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/FriendList';
import transactions from './components/Transactions/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
