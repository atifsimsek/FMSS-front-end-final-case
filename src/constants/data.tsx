import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RxHome } from 'react-icons/rx';
import { AiOutlineUser } from 'react-icons/ai';
import { LinkItem } from '../types/DataTypes';

//Links
export const links: LinkItem[] = [
  { title: 'Home', href: '/', Icon: <RxHome size={25} /> },
  { title: 'Login', href: '/login', Icon: <AiOutlineUser size={25} /> },
  {
    title: 'Favorites',
    href: '/favorites',
    Icon: <MdOutlineFavoriteBorder size={25} />,
  },
];

export const categories = [
  { label: 'Characters', value: 'people' },
  { label: 'Films', value: 'films' },
  { label: 'Starships', value: 'starships' },
  { label: 'Vehicles', value: 'vehicles' },
];

export const hyperdriveRatingOptions: string[] = [
  'ChooseOne',
  '0-2',
  '3-4',
  '5>',
];
export const speedOptions: string[] = [
  'ChooseOne',
  'Slowest to Fastest',
  'Fastest to Slowest',
];
export const sortByAlphabetOptions: string[] = ['ChooseOne', 'a-z', 'z-a'];
