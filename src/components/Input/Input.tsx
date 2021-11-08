import React, {
  FC,
  useRef,
  useEffect
} from 'react';
import './Input.css';
import { InputProps } from '../../utils/constants';

const Input: FC<InputProps> = ({
  date,
  cursor,
  handleChange,
  handleKeyDown,
  handleSubmit
}) => {

  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor);
  }, [ref, cursor, date]);

  return (
    <input
      className="input"
      type="text"
      id="date"
      name="date"
      placeholder="Введите дату"
      ref={ref}
      value={date}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onKeyPress={handleSubmit}
      autoComplete="off"
    />
  );
}

export default Input;
