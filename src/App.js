import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transaction from './data/transactions.json';

const App = () => {
	return (
		<>
			<Profile
				name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
			<Statistics title='Upload stats' stats={statisticalData} />
			<FriendList friends={friends} />
			<TransactionHistory items={transaction} />
		</>
	);
};

export default App;
