import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomRgbColor() {
	const r = () => (Math.random() * 256) >> 0;
	const color = `rgb(${r()}, ${r()}, ${r()})`;
	return color;
}

const Statistics = ({ title, stats }) => {
	return (
		<section className={styles.statistics}>
			{title && <h2 className={styles.title}>{title}</h2>}

			<ul className={styles['stat-list']}>
				{stats.map(({ id, label, percentage }) => {
					return (
						<li
							key={id}
							className={styles.item}
							style={{ backgroundColor: getRandomRgbColor() }}
						>
							<span className={styles.label}>{label}</span>
							<span className={styles.percentage}>{percentage}%</span>
						</li>
					);
				})}
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
