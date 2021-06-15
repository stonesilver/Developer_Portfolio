import SectionHeaderStyles from './SectionHeader.module.scss';

const SectionHeader = ({text}) => {
  return (
    <div>
      <header className={SectionHeaderStyles.aboutMe}>
        <span className={SectionHeaderStyles.text}>{text}</span>
        <span className={SectionHeaderStyles.iconContainer}>
            <span className={SectionHeaderStyles.arrow}></span>
        </span>
      </header>
    </div>
  );
};

export default SectionHeader;
