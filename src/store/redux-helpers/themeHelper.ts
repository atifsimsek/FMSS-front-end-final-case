import { useSelector } from 'react-redux';
import { RootState, store } from '..';
import { updateTheme } from '../features/themeSlice';

// Use Theme
export const useTheme = () =>
  useSelector((state: RootState) => state.theme.theme);

// Use Set Theme
export const toggleTheme = (theme: string) =>
  store.dispatch(updateTheme(theme));
