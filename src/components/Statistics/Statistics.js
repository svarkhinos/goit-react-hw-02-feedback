import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p>
        Good: <span className={s.count}>{good}</span>
      </p>
      <p>
        Neutral: <span className={s.count}>{neutral}</span>
      </p>
      <p>
        Bad: <span className={s.count}>{bad}</span>
      </p>
      <p>
        Total: <span className={s.count}>{total}</span>
      </p>
      <p>
        Positive feedback:{' '}
        <span className={s.count}>{positivePercentage} %</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
