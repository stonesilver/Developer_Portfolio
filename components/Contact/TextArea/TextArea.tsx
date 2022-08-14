import { ChangeEventHandler } from 'react';
import TextAreaStyles from './TextArea.module.scss';

interface Text_area {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

const TextArea = ({ name, value, onChange }: Text_area) => {
  return (
    <>
      <label htmlFor='message' className={TextAreaStyles.message}>
        <textarea
          name={name}
          value={value}
          id={TextAreaStyles.message}
          placeholder='Message'
          required
          onChange={onChange}
        ></textarea>
      </label>
    </>
  );
};

export default TextArea;
