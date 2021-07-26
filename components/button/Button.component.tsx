import buttonStyles from './button.module.scss';

const Button = ({ text, backgroundColor, type, submitting }) => {
  return !type ? (
    <div
      className={`${buttonStyles.button} ${
        backgroundColor ? buttonStyles.backgroundColor : ''
      }`}
    >
      <div className={buttonStyles.text}>{text}</div>
    </div>
  ) : (
    <button type='submit' disabled={submitting} id={buttonStyles.submit}>{text} </button>
  );
};

export default Button;
