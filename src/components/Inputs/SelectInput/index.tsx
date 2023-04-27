import { useEffect, useRef, useState } from 'react';
import styles from './selectInput.module.scss';
import { BsChevronDown } from 'react-icons/bs';
import { useTheme } from '../../../store/redux-helpers/themeHelper';

interface Props {
  title: string;
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
}

const SelectInput = ({ title, selected, setSelected, options }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  //Control the clik outside

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectRef]);

  return (
    <>
      <div ref={selectRef} className={styles.dropdown}>
        <label
          className={`${styles.title} ${styles[theme]} ${
            isActive && styles.titleOpen
          }`}
        >
          {title}
        </label>
        <button
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.dropdownBtn} ${styles[theme]}`}
        >
          {selected}
          <span>
            <BsChevronDown
              className={`${styles.icon}  ${isActive && styles.open} `}
            />
          </span>
        </button>
        {isActive && (
          <div className={`${styles.dropdownContent} ${styles[theme]}`}>
            {options.map((option: string, index: number) => (
              <div
                key={index}
                onClick={() => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className={`${styles.dropdownItem} ${styles[theme]}`}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectInput;
