import styles from './filter.module.scss';
import SearchInput from '../Inputs/SearchInput';
import SelectInput from '../Inputs/SelectInput';
import { useState } from 'react';
import { useTheme } from '../../store/redux-helpers/themeHelper';
const Filter = () => {
  const [selected, setSelected] = useState<string>('ChooseOne');
  const options: string[] = ['select 1', 'select 2', 'select 3'];
  const theme = useTheme();
  return (
    <div className={`${styles.filter} ${styles[theme]}`}>
      <SearchInput />
      <div className={styles.selectBoxs}>
        <SelectInput
          title={'sort'}
          selected={selected}
          setSelected={setSelected}
          options={options}
        />
        <SelectInput
          title={'sort'}
          selected={selected}
          setSelected={setSelected}
          options={options}
        />
        <SelectInput
          title={'sort'}
          selected={selected}
          setSelected={setSelected}
          options={options}
        />
      </div>
    </div>
  );
};

export default Filter;
