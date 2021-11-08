import React, {
  FC,
  ChangeEvent,
  useState,
  useRef,
  useEffect
} from 'react';
import './Input.css';
import { InputProps } from '../../utils/constants';

const Input: FC<InputProps> = ({
  date,
  handleChange,
  handleKeyDown,
  handleSubmit
}) => {

  const [cursor, setCursor] = useState<number | null>(null);

  const ref = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    const input = ref.current;
    if (input) input.setSelectionRange(cursor, cursor)
  }, [ref, cursor, date]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setCursor(evt.currentTarget.selectionStart);
    handleChange(evt);
  }

  return (
    <input
      className="input"
      type="text"
      id="date"
      name="date"
      ref={ref}
      value={date}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      onKeyPress={handleSubmit}
      autoComplete="off"
    />
  );
}

export default Input;
