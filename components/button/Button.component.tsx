import buttonStyles from './button.module.scss';

const Button = ({ text, backgroundColor, type }) => {
  return !type ? (
    <div
      className={`${buttonStyles.button} ${
        backgroundColor ? buttonStyles.backgroundColor : ''
      }`}
    >
      <div className={buttonStyles.text}>{text}</div>
    </div>
  ) : (
    <input type='submit' value={text} id={buttonStyles.submit} />
  );
};

export default Button;
