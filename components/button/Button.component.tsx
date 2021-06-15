import buttonStyles from './button.module.scss';

const Button = ({ text, backgroundColor }) => {
  return (
    <div
      className={`${buttonStyles.button} ${
        backgroundColor ? buttonStyles.backgroundColor : ''
      }`}
    >
      <div className={buttonStyles.text}>{text}</div>
    </div>
  );
};

export default Button;
