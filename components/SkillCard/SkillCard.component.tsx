import skillStyles from './SkillCard.module.scss';

const SkillCard = ({ color, name, percentage }) => {
  const value = percentage * 3.6;
  const left = value >= 180 ? 180 : value;
  const right = value > 180 ? value - 180 : 0;
  return (
    <div className={skillStyles.skillCard}>
      <div className={skillStyles.circular}>
        <div className={skillStyles.inner}></div>
        <div className={skillStyles.outer}></div>
        <div className={skillStyles.numb}>{percentage}%</div>
        <div className={skillStyles.circle}>
          <div className={skillStyles.dot}></div>
          <div className={`${skillStyles.bar} ${skillStyles.left}`}>
            <div className={skillStyles.progress}>
              <style jsx>
                {`
                  transform: rotate(${left}deg);
                  background: ${color};
                `}
              </style>
            </div>
          </div>
          <div className={`${skillStyles.bar} ${skillStyles.right}`}>
            <div className={skillStyles.progress}>
              <style jsx>
                {`
                  transform: rotate(${right}deg);
                  background: ${color};
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
      <div className={skillStyles.cardBody}>
        <span className={skillStyles.text}>{name}</span>
      </div>
    </div>
  );
};

export default SkillCard;
