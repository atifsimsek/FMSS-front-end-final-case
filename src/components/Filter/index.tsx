import { useState, useEffect } from 'react';
import { useTheme } from '../../store/redux-helpers/themeHelper';
import { useAppDispatch } from '../../store/hooks';
import { useData } from '../../store/features/dataSlice';
import {
  filterByHyperdrive,
  filterBySearch,
  sortByAlphabetically,
  sortBySpeed,
} from '../../store/features/filterSlice';
import SearchInput from '../Inputs/SearchInput';
import SelectInput from '../Inputs/SelectInput';
import styles from './Filter.module.scss';
import { AllTypes, Item } from '../../types/ApiTypes';
import { MdMenuOpen, MdMenu } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

const Filter: React.FC = () => {
  // State for filter options
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [hyperdriveRatingFilter, setHyperdriveRatingFilter] =
    useState<string>('ChooseOne');
  const [speedFilter, setSpeedFilter] = useState<string>('ChooseOne');
  const [sortAlphabetFilter, setSortAlphabetFilter] =
    useState<string>('ChooseOne');

  // Options for each filter
  const hyperdriveRatingOptions: string[] = ['ChooseOne', '0-2', '3-4', '5>'];
  const speedOptions: string[] = [
    'ChooseOne',
    'Slowest to Fastest',
    'Fastest to Slowest',
  ];
  const sortByAlphabetOptions: string[] = ['ChooseOne', 'a-z', 'z-a'];

  // Hooks for accessing data and Redux store
  const theme: string = useTheme();
  const { items, category }: { items: AllTypes[]; category: string } =
    useData();
  const dispatch = useAppDispatch();

  // Effect for filtering by search term
  useEffect(() => {
    dispatch(filterBySearch({ items, search }));
  }, [dispatch, items, search]);

  // Effect for filtering by hyperdrive rating
  useEffect(() => {
    dispatch(filterByHyperdrive({ items, filter: hyperdriveRatingFilter }));
  }, [dispatch, hyperdriveRatingFilter]);

  // Effect for sorting by speed
  useEffect(() => {
    dispatch(sortBySpeed({ items, filter: speedFilter }));
  }, [dispatch, speedFilter]);

  // Effect for sorting alphabetically
  useEffect(() => {
    dispatch(sortByAlphabetically({ items, filter: sortAlphabetFilter }));
  }, [dispatch, sortAlphabetFilter]);

  // Reset the filter when the category changes
  useEffect(() => {
    setSearch('');
    setHyperdriveRatingFilter('ChooseOne');
  }, [category]);

  return (
    <>
      <div
        className={`${styles.filter} ${open && styles.open}  ${styles[theme]}`}
      >
        <SearchInput search={search} setSearch={setSearch} />
        {category === 'starships' && (
          <div className={styles.selectBoxs}>
            <SelectInput
              title="Filter by Hyperdrive Ratings"
              selected={hyperdriveRatingFilter}
              setSelected={setHyperdriveRatingFilter}
              options={hyperdriveRatingOptions}
            />
            <SelectInput
              title="Sort by Speed"
              selected={speedFilter}
              setSelected={setSpeedFilter}
              options={speedOptions}
            />
            <SelectInput
              title="Sort Alphabetically"
              selected={sortAlphabetFilter}
              setSelected={setSortAlphabetFilter}
              options={sortByAlphabetOptions}
            />
          </div>
        )}
      </div>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className={styles.menu}
      >
        {open ? <MdMenuOpen size={18} /> : <FiSearch size={18} />}
      </button>
    </>
  );
};

export default Filter;
