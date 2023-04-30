import { store } from '..';
import { updateTheme } from '../features/themeSlice';
import { useAppSelector } from '../hooks';

//Use Data
export const useData = () => useAppSelector((state) => state.data);

// Use Theme
export const useTheme = () => useAppSelector((state) => state.theme.theme);

// Use Set Theme
export const toggleTheme = (theme: string) =>
  store.dispatch(updateTheme(theme));
