import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
	const statusClass = isOnline ? styles.online : styles.offline;
	return (
		<li className={styles.item}>
			<span className={statusClass}>{isOnline}</span>
			<img className={styles.avatar} src={avatar} alt={name} width='48' />
			<p className={styles.name}>{name}</p>
		</li>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
};

export default FriendListItem;
