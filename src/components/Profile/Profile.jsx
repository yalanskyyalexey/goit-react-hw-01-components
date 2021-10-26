import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ name, avatar, tag, location, stats }) => {
	const st = Object.entries(stats).map(([key, value]) => (
		<li key={key}>
			<span className={styles.label}>{key}</span>
			<span className={styles.quantity}>{value}</span>
		</li>
	));
	return (
		<div className={styles.profile}>
			<div className={styles.description}>
				<img src={avatar} alt={name} className={styles.avatar} />
				<p className={styles.name}>{name}</p>
				<p className={styles.tag}>@{tag}</p>
				<p className={styles.location}>{location}</p>
			</div>
			<ul className={styles.stats}>{st}</ul>
		</div>
	);
};

export default Profile;

Profile.propTypes = {
	name: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	stats: PropTypes.shape({
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}).isRequired,
};
