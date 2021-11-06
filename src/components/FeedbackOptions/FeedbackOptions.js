import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={s.control}>
        {options.map((option, index) => (
          <button
            type="button"
            className={s.btn}
            key={index}
            onClick={() => onLeaveFeedback(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
