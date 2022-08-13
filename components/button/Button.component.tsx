import buttonStyles from './button.module.scss';

interface buttonProps {
  text: string;
  backgroundColor: boolean;
  type?: boolean;
  submitting?: boolean;
  githubLink?: string;
  liveLink?: string;
}

const Button = ({
  text,
  backgroundColor,
  type,
  submitting,
  githubLink,
  liveLink,
}: buttonProps) => {
  const openLinkInNewtab = () => {
    (githubLink || liveLink) && window.open(githubLink || liveLink, '_blank');
  };

  return !type ? (
    <div
      className={`${buttonStyles.button} ${
        backgroundColor ? buttonStyles.backgroundColor : ''
      }`}
      onClick={openLinkInNewtab}
    >
      {text}
      {/* <div className={buttonStyles.text}>{text}</div> */}
    </div>
  ) : (
    <button type='submit' disabled={submitting} id={buttonStyles.submit}>
      {text}
    </button>
  );
};

export default Button;
