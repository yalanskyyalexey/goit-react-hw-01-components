import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = ({ title, stats }) => {
	return (
		<section className={styles.statistics}>
			<h2 className={styles.title}>{title}</h2>

			<ul className={styles['stat-list']}>
				{stats.map(({ id, label, percentage }) => (
					<li
						key={id}
						className={styles.item}
						style={{ backgroundColor: getRandomHexColor() }}
					>
						<span className={styles.label}>{label}</span>
						<span className={styles.percentage}>{percentage}%</span>
					</li>
				))}
			</ul>
		</section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		})
	).isRequired,
};

export default Statistics;
