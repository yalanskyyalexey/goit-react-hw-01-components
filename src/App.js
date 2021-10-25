import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
// import FriendList from './components/FriendList/FriendList';
// import Transaction from './components/Transaction/Transaction';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
// import friends from './data/friend.json';
// import transaction from './data/transaction.json';

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
		</>
	);
};

export default App;
