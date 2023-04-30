import { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../store/redux-helpers/helper';
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
import { AllTypes } from '../../types/ApiTypes';
import { MdMenuOpen } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import {
  hyperdriveRatingOptions,
  sortByAlphabetOptions,
  speedOptions,
} from '../../constants/data';

const Filter: React.FC = () => {
  // State for filter options
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [hyperdriveRatingFilter, setHyperdriveRatingFilter] =
    useState<string>('ChooseOne');
  const [speedFilter, setSpeedFilter] = useState<string>('ChooseOne');
  const [sortAlphabetFilter, setSortAlphabetFilter] =
    useState<string>('ChooseOne');

  // Hooks for accessing data and Redux store
  const theme: string = useTheme();
  const { items, category }: { items: AllTypes[]; category: string } =
    useData();
  const dispatch = useAppDispatch();

  // Define memoized filter functions with useCallback
  const filterBySearchMemoized = useCallback(
    () => dispatch(filterBySearch({ items, search })),
    [dispatch, items, search]
  );
  const filterByHyperdriveMemoized = useCallback(
    () =>
      dispatch(filterByHyperdrive({ items, filter: hyperdriveRatingFilter })),
    [dispatch, items, hyperdriveRatingFilter]
  );
  const sortBySpeedMemoized = useCallback(
    () => dispatch(sortBySpeed({ items, filter: speedFilter })),
    [dispatch, items, speedFilter]
  );
  const sortByAlphabeticallyMemoized = useCallback(
    () => dispatch(sortByAlphabetically({ items, filter: sortAlphabetFilter })),
    [dispatch, items, sortAlphabetFilter]
  );

  // Effect for filtering by search term
  useEffect(() => {
    filterBySearchMemoized();
  }, [filterBySearchMemoized]);

  // Effect for filtering by hyperdrive rating
  useEffect(() => {
    filterByHyperdriveMemoized();
  }, [filterByHyperdriveMemoized]);

  // Effect for sorting by speed
  useEffect(() => {
    sortBySpeedMemoized();
  }, [sortBySpeedMemoized]);

  // Effect for sorting alphabetically
  useEffect(() => {
    sortByAlphabeticallyMemoized();
  }, [sortByAlphabeticallyMemoized]);

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
