import SectionHeaderStyles from './SectionHeader.module.scss';

const SectionHeader = ({ text, info }) => {
  return (
    <div className={SectionHeaderStyles.sectionHeader}>
      <div className={SectionHeaderStyles.aboutMe}>
        <span className={SectionHeaderStyles.text}>{text}</span>
        <span className={SectionHeaderStyles.iconContainer}>
          <span className={SectionHeaderStyles.arrow}></span>
        </span>
      </div>
      <div className={SectionHeaderStyles.info}>
        <span className={SectionHeaderStyles.text}>{info}</span>
      </div>
    </div>
  );
};

export default SectionHeader;
