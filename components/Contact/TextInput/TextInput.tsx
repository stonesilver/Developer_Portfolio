import { ChangeEventHandler } from 'react';
import inputStyles from './TextInput.module.scss';

interface Input {
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

const TextInput = ({ name, value, onChange }: Input) => {
  return (
    <>
      <label htmlFor={name} className={inputStyles.textLabel}>
        <input
          type='text'
          name={name}
          value={value}
          id={inputStyles.name}
          placeholder={name}
          required
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default TextInput;
